import React, { useEffect, useState, useRef } from "react";
import "../styles/Game.css";
import frenchieToken from "../assets/frenchie-token.png";
import hydrantIcon from "../assets/hydrant-icon.png";

function Game() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const currentScore = useRef(score);

  useEffect(() => {
    currentScore.current = score;
  }, [score]);

  const isJumping = useRef(false);

  const calculateSpeed = () => {
    let baseSpeed = 10;
    let speedIncreaseFactor = 2;
    return (
      baseSpeed + Math.floor(currentScore.current / 5) * speedIncreaseFactor
    );
  };

  useEffect(() => {
    if (!isPlaying) return;

    const frenchie = document.getElementById("frenchie");
    const obstacle = document.getElementById("obstacle");

    let obstacleTimerId;
    let gravity = 0.9;
    let position = 0;
    let obstacleLeft = 600;

    function jump() {
      let count = 0;
      let timerId = setInterval(() => {
        if (count === 15) {
          clearInterval(timerId);
          let downTimerId = setInterval(() => {
            if (count === 0) {
              clearInterval(downTimerId);
              isJumping.current = false;
            }
            position -= 5;
            count--;
            position *= gravity;
            frenchie.style.bottom = position + "px";
          }, 20);
        }
        position += 30;
        count++;
        position *= gravity;
        frenchie.style.bottom = position + "px";
      }, 20);
    }

    function handleJumpStart() {
      if (!isJumping.current) {
        isJumping.current = true;
        jump();
      }
    }

    function handleKeyDown(event) {
      if (event.keyCode === 32) {
        event.preventDefault();
        handleJumpStart();
      }
    }

    function handleTouchStart(event) {
      event.preventDefault();
      handleJumpStart();
    }

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("keydown", handleKeyDown);

    function moveObstacle() {
      obstacleTimerId = setInterval(() => {
        obstacleLeft -= calculateSpeed();
        obstacle.style.left = obstacleLeft + "px";

        if (obstacleLeft <= 0) {
          obstacleLeft = 600;
          setScore((prevScore) => prevScore + 1);
        }

        if (obstacleLeft < 60 && position < 60) {
          clearInterval(obstacleTimerId);
          setIsPlaying(false);
          setGameOver(true);
        }
      }, 20);
    }

    moveObstacle();

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("keydown", handleKeyDown);
      if (obstacleTimerId) {
        clearInterval(obstacleTimerId);
      }
    };
  }, [isPlaying]);

  return (
    <div id="gameContainer" tabIndex="0">
      {!gameOver && <div className="score">Score: {score}</div>}
      {gameOver && (
        <div className="game-over">
          <p>Game Over</p>
          <p>Final Score: {score}</p>
          <button
            onClick={() => {
              setIsPlaying(true);
              setGameOver(false);
              setScore(0);
            }}
          >
            Play Again
          </button>
        </div>
      )}
      {!isPlaying && !gameOver && (
        <button className="play-button" onClick={() => setIsPlaying(true)}>
          Play
        </button>
      )}
      <div id="game"></div>
      <div
        id="frenchie"
        style={{ backgroundImage: `url(${frenchieToken})` }}
      ></div>
      <div
        id="obstacle"
        style={{ backgroundImage: `url(${hydrantIcon})` }}
      ></div>
    </div>
  );
}

export default Game;

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);

  const msg = {
    to: process.env.EMAIL_TO,
    from: 'info@taskingtogether.com',
    subject: `New Contact from ${data.name}`,
    text: data.message,
    html: `<strong>New Email from: ${data.email}. <br></br>${data.message} </strong>`,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
    return {
      statusCode: error.code,
      body: JSON.stringify({
        message: "Error sending email",
        error: error.message,
      }),
    };
  }
};

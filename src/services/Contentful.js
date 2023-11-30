import { createClient } from "contentful";
console.log(process.env.REACT_APP_CONTENTFUL_SPACE);

export const contentfulClient = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});



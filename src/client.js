import * as contentful from "contentful";

const spaceid = process.env.REACT_APP_SPACE_ID.slice(0, -1);
const accessToken = process.env.REACT_APP_ACCESS_TOKEN.slice(0, -1);

export const client = contentful.createClient({
  space: spaceid,
  accessToken: accessToken,
});

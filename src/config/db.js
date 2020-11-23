import faunadb from "faunadb";

const client = new faunadb.Client({
  secret: process.env.REACT_APP_NOTES,
});
const q = faunadb.query;

export { client, q };

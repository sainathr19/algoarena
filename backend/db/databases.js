const client = require("./connection");

const authDB = client.db("authentication");
const problemDB = client.db("Problems");
const progressDB = client.db("progress");

module.exports = {
  authDB,
  problemDB,
  progressDB,
};

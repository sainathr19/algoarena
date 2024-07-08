const client = require("./connection");

const authDB = client.db("authentication");
const problemDB = client.db("Problems");
const progressDB = client.db("progress");
const contestsDB = client.db("contests");
module.exports = {
  authDB,
  problemDB,
  progressDB,
  contestsDB,
};

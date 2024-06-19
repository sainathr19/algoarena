const { authDB, progressDB, problemDB } = require("./databases");

const TestCases = problemDB.collection("testcases");
const Submissions = problemDB.collection("submissions");
const problemStatements = problemDB.collection("problem-statements");
const Precodes = problemDB.collection("pre-code");

const UserProgress = progressDB.collection("userprogress");

const Credentials = authDB.collection("credentials");

module.exports = {
  TestCases,
  Submissions,
  problemStatements,
  Precodes,
  UserProgress,
  Credentials,
};

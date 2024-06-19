const { Submissions } = require("../db/collections");

const recordNewSubmission = async (
  userId,
  contestId,
  problemId,
  timestamp,
  soureCode,
  Language,
  verdict,
  results,
  score
) => {
  const newSubmission = {
    userId: userId,
    contestId: contestId,
    problemId: problemId,
    timestamp: timestamp,
    soureCode: soureCode,
    Language: Language,
    verdict: verdict,
    results: results,
    score: score,
  };
  Submissions.insertOne(newSubmission);
  return "Submission Recorded";
};

module.exports = recordNewSubmission;

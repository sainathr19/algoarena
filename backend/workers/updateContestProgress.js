const { problemStatements } = require("../db/collections");

const UpdateContestProgress = async (contestId, problemId, status) => {
  problemStatements.updateOne(
    { contestId: contestId, problemId: problemId },
    {
      $inc: {
        usersTried: 1,
        successfulSubmissions: status === "Accepted" ? 1 : 0,
      },
    }
  );
  return "Contest Progress updated";
};
module.exports = UpdateContestProgress;

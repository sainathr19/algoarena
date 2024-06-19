const { UserProgress } = require("../db/collections");

const UpdateUserProgress = async (
  userId,
  contestId,
  problemId,
  status,
  score
) => {
  let progress = await UserProgress.findOne({ userId, contestId });
  if (!progress) {
    progress = {
      userId: userId,
      contestId: contestId,
      score: 0,
      solved: 0,
      problems: {
        [problemId]: status,
      },
    };
    await UserProgress.insertOne(progress);
    return "new progress created";
  } else {
    if (
      problemId in progress.problems &&
      progress.problems[problemId] === "solved"
    ) {
      return;
    }
    UserProgress.updateOne(
      { userId: userId, contestId: contestId },
      {
        $set: { [`problems.${problemId}`]: status },
        $inc: { score: score, solved: status === "solved" ? 1 : 0 },
      }
    );
  }
  return "Progress update successfull";
};

// if (!progress) {
//   progress = {
//     userId: userId,
//     contestId: contestId,
//     problems: [
//       {
//         problemId: problemId,
//         status: status,
//       },
//     ],
//   };
//   await UserProgress.insertOne(progress);
//   return "created new progress";
// }
// const Problems = progress.problems;
// const exists = Problems.some((problem) => problem.problemId === problemId);
// if (exists) {
//   const Filter = {
//     userId: userId,
//     contestId: contestId,
//     "problems.problemId": problemId,
//   };
//   await UserProgress.updateOne(Filter, {
//     $set: { "problems.$.status": status },
//   });
// } else {
//   const Filter = { userId: userId, contestId: contestId };
//   await UserProgress.updateOne(Filter, {
//     $push: { problems: { problemId: problemId, status: status } },
//   });
// }

module.exports = UpdateUserProgress;

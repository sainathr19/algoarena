const express = require("express");
const router = express.Router();

const {
  problemStatements,
  TestCases,
  Submissions,
  UserProgress,
} = require("../../db/collections");
const postSubmission = require("../../Judge0/submit");
const getOutput = require("../../Judge0/output");
const UpdateContestProgress = require("../../workers/updateContestProgress");
const UpdateUserProgress = require("../../workers/updateUserProgress");
const recordNewSubmission = require("../../workers/recordNewSubmission");
const getCurrentTime = require("../../utils/getCurrentTime");

router.post("/run", async (req, res) => {
  const {
    userId,
    contestId,
    problemId,
    isCustom,
    customInputs,
    LanguageId,
    sourceCode,
  } = req.body;
  const Problem = await problemStatements.findOne({
    problemId: problemId,
    contestId: contestId,
  });
  const token = await postSubmission(
    LanguageId,
    sourceCode,
    isCustom ? customInputs : Problem.sampleInput,
    Problem.sampleOutput,
    isCustom
  );
  const out = await getOutput(token);
  res.json(out);
});

router.post("/submit", async (req, res) => {
  const { userId, contestId, problemId, LanguageId, sourceCode } = req.body;
  let userScore = 0;
  let maxScore = 0;
  const Problem = await TestCases.findOne({
    contestId: contestId,
    problemId: problemId,
  });
  if (!Problem) {
    return res.json({
      msg: "Unknown error Occured",
      status: "err",
    });
  } else {
    const Cases = Problem.testcases;
    let Results = [];
    for (const testcase of Cases) {
      var token = await postSubmission(
        LanguageId,
        sourceCode,
        testcase.std_inp,
        testcase.std_out,
        false
      );
      const output = await getOutput(token);
      if (output.status_id === 3) {
        userScore += testcase.score;
      }
      maxScore += testcase.score;
      Results.push(output);
    }
    const isAccepted = Results.every((result) => {
      return result.status_id == 3;
    });
    if (isAccepted) {
      UpdateUserProgress(userId, contestId, problemId, "solved", userScore);
    }
    UpdateContestProgress(contestId, problemId, isAccepted ? "Accepted" : "");

    recordNewSubmission(
      userId,
      contestId,
      problemId,
      getCurrentTime(),
      sourceCode,
      "python",
      isAccepted ? "Accepted" : "Not Accepted",
      Results,
      userScore
    );
    res.json({
      isAccepted: isAccepted,
      results: Results,
      userScore: userScore,
      maxScore: maxScore,
    });
  }
});

router.post("/submissions", async (req, res) => {
  const { userId, problemId, contestId } = req.body;
  let subs = [];
  itr = Submissions.find({
    userId: userId,
    problemId: problemId,
    contestId: contestId,
  });
  while (await itr.hasNext()) {
    subs.push(await itr.next());
  }
  res.json(subs);
});

router.post("/get-problems", async (req, res) => {
  const { contestId } = req.body;
  let arr = [];

  const prob = await problemStatements
    .find({ contestId: contestId })
    .sort({ maxScore: 1 });

  while (await prob.hasNext()) {
    arr.push(await prob.next());
  }
  res.json(arr);
});

router.post("/problem", async (req, res) => {
  const { userId, contestId, problemId } = req.body;
  const prob = await problemStatements.findOne({ problemId: problemId });
  UpdateUserProgress(userId, contestId, problemId, "opened", 0);
  res.send(prob);
});

router.post("/submission", async (req, res) => {
  const { submissionId } = req.body;
  const sub = await Submissions.findOne({ submissionId: submissionId });
  res.send(sub);
});

router.post("/getcontestprogress", async (req, res) => {
  const { userId, contestId } = req.body;
  let progress = await UserProgress.findOne({
    userId: userId,
    contestId: contestId,
  });
  if (!progress) {
    progress = {
      userID: userId,
      contestId: contestId,
      solved: 0,
      score: 0,
      problems: [],
    };
  }
  res.json(progress);
});
router.post("/getleaderboard", async (req, res) => {
  const { contestId } = req.body;
  let Leaderboard = [];
  const progress = await UserProgress.find({ contestId: contestId }).sort({
    score: -1,
  });
  if (!progress) {
    return res.json([]);
  }
  while (await progress.hasNext()) {
    Leaderboard.push(await progress.next());
  }
  return res.json(Leaderboard);
});
module.exports = router;

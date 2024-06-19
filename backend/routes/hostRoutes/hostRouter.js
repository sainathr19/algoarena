const express = require("express");
const router = express.Router();
const { problemStatements, TestCases } = require("../../db/collections");

router.post("/addproblem", async (req, res) => {
  const {
    contestId,
    title,
    description,
    maxScore,
    inputFormat,
    outputFormat,
    constraints,
    sampleInput,
    sampleOutput,
    explanation,
  } = req.body;
  const newProblem = {
    contestId: contestId,
    problemId: "1008", //create problem id
    title: title,
    description: description,
    maxScore: maxScore,
    inputFormat: inputFormat,
    outputFormat: outputFormat,
    constraints: constraints,
    sampleInput: sampleInput,
    sampleOutput: sampleOutput,
    explanation: explanation,
    usersTried: 0,
    successfulSubmissions: 0,
  };
  await problemStatements.insertOne(newProblem);
  return res.json("New Problem added");
});

router.post("/addtestcase", async (req, res) => {
  const { std_inp, std_out, contestId, problemId, score } = req.body;
  const Filter = { contestId: contestId, problemId: problemId };
  const Testcase = {
    std_inp: std_inp,
    std_out: std_out,
    score: score,
  };
  let Problem = await TestCases.findOne(Filter, { _id: 0 });
  console.log(Problem);
  if (!Problem) {
    Problem = {
      problemId: problemId,
      contestId: contestId,
      testcases: [Testcase],
    };
    await TestCases.insertOne(Problem);
    return res.json({ msg: "Invalid ContestID or ProblemID", status: "err" });
  } else {
    Problem.testcases.push(Testcase);
    await TestCases.replaceOne(Filter, Problem);
    return res.json({ msg: "Testcase Added", status: "ok" });
  }
});

module.exports = router;

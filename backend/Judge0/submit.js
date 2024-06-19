const axios = require("axios");

const postSubmission = async (
  language_id,
  source_code,
  stdin,
  exp_output,
  isCustom
) => {
  const options = {
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions",
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "d048904afamsh7c58dce1604a4e9p176967jsna9a437cfb37f",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
    data: JSON.stringify({
      language_id: language_id,
      source_code: source_code,
      stdin: stdin,
      expected_output: isCustom ? null : exp_output,
    }),
  };

  const res = await axios.request(options);
  return res.data.token;
};

module.exports = postSubmission;

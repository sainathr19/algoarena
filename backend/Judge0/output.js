const axios = require("axios");

const getOutput = async (token) => {
  const options = {
    method: "GET",
    url: "https://judge0-ce.p.rapidapi.com/submissions/" + token,
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "X-RapidAPI-Key": "d048904afamsh7c58dce1604a4e9p176967jsna9a437cfb37f",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
  };

  const res = await axios.request(options);
  if (res.data.status_id <= 2) {
    const res2 = await getOutput(token);
    return res2;
  }
  return res.data;
};

module.exports = getOutput;

const { MongoClient } = require("mongodb");
const client = new MongoClient(
  "mongodb+srv://sainathr:1Xu38QhJ8NVG0aCy@contest-app.6wtwx9x.mongodb.net/?retryWrites=true&w=majority"
);
module.exports = client;

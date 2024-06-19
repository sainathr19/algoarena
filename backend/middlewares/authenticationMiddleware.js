const authenticationMiddleware = (req, res, next) => {
  const token = req.header.token;
  jwt.verify(token, "secret", function (err, decoded) {
    if (!err) {
      next();
    } else {
      return res.json({
        msg: "Unknown error occured,Please Login and try again",
        status: "error",
      });
    }
  });
};

export default authenticationMiddleware;

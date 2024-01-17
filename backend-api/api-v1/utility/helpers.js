exports.throwCustomError = (msg, status = 500) => {
  const err = new Error(msg);
  err.status = status;
  throw err;
};

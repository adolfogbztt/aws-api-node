module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello Word",
        input: event,
      },
      null,
      2
    ),
  };
};

function errorResponseProblemJsonRule() {
  return {
    Operation: {
      enter(operation, ctx) {
        const responses = operation.responses || {};

        Object.entries(responses).forEach(([statusCode, response]) => {
          if (!/^[45]\d\d$/.test(statusCode)) return;

          const content = response && response.content;
          if (content && content['application/problem+json']) return;

          ctx.report({
            message: `Platform standard: ${statusCode} responses must declare application/problem+json.`,
            location: ctx.location.child(['responses', statusCode]),
          });
        });
      },
    },
  };
}

module.exports = { errorResponseProblemJsonRule };

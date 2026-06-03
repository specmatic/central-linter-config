const { operationIdConventionRule } = require('./rules/operation-id-convention');
const { errorResponseProblemJsonRule } = require('./rules/error-response-problem-json');
const { paginationBoundsRule } = require('./rules/pagination-bounds');

module.exports = {
  id: 'platform',
  rules: {
    oas3: {
      'operation-id-convention': operationIdConventionRule,
      'error-response-problem-json': errorResponseProblemJsonRule,
      'pagination-bounds': paginationBoundsRule,
    },
    oas3_1: {
      'operation-id-convention': operationIdConventionRule,
      'error-response-problem-json': errorResponseProblemJsonRule,
      'pagination-bounds': paginationBoundsRule,
    },
  },
};

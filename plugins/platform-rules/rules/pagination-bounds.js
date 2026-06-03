function paginationBoundsRule() {
  return {
    Operation: {
      enter(operation, ctx) {
        const parameters = operation.parameters || [];
        const limit = parameters.find((parameter) => parameter.name === 'limit' && parameter.in === 'query');
        const offset = parameters.find((parameter) => parameter.name === 'offset' && parameter.in === 'query');

        if (!limit || !offset) return;

        const limitDefault = limit.schema && typeof limit.schema.default === 'number' ? limit.schema.default : 0;
        const offsetDefault = offset.schema && typeof offset.schema.default === 'number' ? offset.schema.default : 0;

        if (limitDefault <= 100 && limitDefault + offsetDefault <= 1000) return;

        ctx.report({
          message: `Platform standard: Pagination defaults are too large (limit=${limitDefault}, offset=${offsetDefault}).`,
          location: ctx.location.child('parameters'),
        });
      },
    },
  };
}

module.exports = { paginationBoundsRule };

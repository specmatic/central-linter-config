function operationIdConventionRule() {
  return {
    Root(root, ctx) {
      if (!root.paths) return;

      Object.entries(root.paths).forEach(([pathName, pathItem]) => {
        const resourceName = pathName.split('/').filter(Boolean)[0];
        if (!resourceName) return;

        const capitalized = resourceName.charAt(0).toUpperCase() + resourceName.slice(1);

        ['get', 'post', 'put', 'delete', 'patch'].forEach((method) => {
          const operation = pathItem[method];
          if (!operation || !operation.operationId) return;

          const expectedId = `${method}${capitalized}`;
          if (operation.operationId.toLowerCase() === expectedId.toLowerCase()) return;

          ctx.report({
            message: `Platform standard: ${method.toUpperCase()} ${pathName} should use operationId '${expectedId}', but found '${operation.operationId}'.`,
            location: ctx.location.child(['paths', pathName, method, 'operationId']),
          });
        });
      });
    },
  };
}

module.exports = { operationIdConventionRule };

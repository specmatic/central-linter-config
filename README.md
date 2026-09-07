# Central linter config

This is a sample central config repo for `specmatic-linter`.

Config:

- `specmatic-linter.yaml`

Profiles:

- `public-api`
- `internal-api`
- `payment-api`

The repo contains:

- reusable configurable rules in the root `rules` inventory
- built-in rulesets activated per profile via `rules.extends`
- profile-specific built-in overrides, severities, and maturity levels

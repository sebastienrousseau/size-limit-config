# `@sebastienrousseau/size-limit-config` Features & Capabilities

An exhaustive overview covering **100% of the features, rules, and capabilities** provided by `@sebastienrousseau/size-limit-config`.

---

## Feature Matrix

| Feature | Scope | Status | Guarantee |
| :--- | :--- | :--- | :--- |
| **CommonJS Bundle Budget** | Core | Active | Enforces 10 KB budget on dist/index.js |
| **ESM Bundle Budget** | Core | Active | Enforces 10 KB budget on dist/index.mjs |
| **Automated CI Rejection** | Core | Active | Fails pull requests that exceed defined artifact budgets |
| **Zero Dependencies** | Packaging | Active | 0 external npm runtime dependencies |
| **Dual Packaging** | Distribution | Active | Full CommonJS and ESM interoperability |
| **TypeScript Types** | Typings | Active | Bundled `index.d.ts` declarations |

---

## Feature Deep Dive

### 1. CommonJS Bundle Budget
Enforces 10 KB budget on dist/index.js. Designed to guarantee deterministic behavior across all development and continuous integration environments.

### 2. ESM Bundle Budget
Enforces 10 KB budget on dist/index.mjs. Designed to guarantee deterministic behavior across all development and continuous integration environments.

### 3. Automated CI Rejection
Fails pull requests that exceed defined artifact budgets. Designed to guarantee deterministic behavior across all development and continuous integration environments.


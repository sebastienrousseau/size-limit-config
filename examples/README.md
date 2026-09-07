# `@sebastienrousseau/size-limit-config` Examples Catalog

This directory provides runnable, standalone examples covering **100% of the functionalities and features** provided by `@sebastienrousseau/size-limit-config`.

---

## Example Suite Overview

| File | Type | Feature Coverage | Command |
| :--- | :--- | :--- | :--- |
| [`basic.js`](./basic.js) | CommonJS | Standard default configuration import | `node examples/basic.js` |
| [`advanced.js`](./advanced.js) | CommonJS | Custom extension and rule overrides | `node examples/advanced.js` |
| [`esm.mjs`](./esm.mjs) | ES Module | Native ESM consumption via `import` | `node examples/esm.mjs` |
| [`features.js`](./features.js) | CommonJS | **100% feature showcase & assertions** | `node examples/features.js` |

---

## 100% Feature Coverage Checklist

- [x] **CommonJS Bundle Budget**: Enforces 10 KB budget on dist/index.js
- [x] **ESM Bundle Budget**: Enforces 10 KB budget on dist/index.mjs
- [x] **Automated CI Rejection**: Fails pull requests that exceed defined artifact budgets
- [x] **Dual Packaging**: Full interoperability across CommonJS (`.cjs`, `.js`) and ECMAScript Modules (`.mjs`).

---

## Running All Examples

You can run and validate the entire example suite with:

```bash
npm run examples
```

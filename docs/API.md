# `@sebastienrousseau/size-limit-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/size-limit-config`.

---

## Description
Shareable size-limit configuration enforcing strict bundle size budgets on build outputs.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/size-limit-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. CommonJS Bundle Budget
- **Description**: Enforces 10 KB budget on dist/index.js
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. ESM Bundle Budget
- **Description**: Enforces 10 KB budget on dist/index.mjs
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Automated CI Rejection
- **Description**: Fails pull requests that exceed defined artifact budgets
- **Scope**: Production & Development
- **Status**: Stable & Active


<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./size-limit-config.svg" alt="size-limit-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/size-limit-config</h1>

<p align="center">
  Shareable Size Limit configuration rules enforcing strict performance bundle budgets.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/size-limit-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/size-limit-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/size-limit-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Fsize-limit-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/size-limit-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/size-limit-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/size-limit-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [Performance Bundle Budget Enforcement](#performance-bundle-budget-enforcement) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/size-limit-config

# pnpm
pnpm add -D @sebastienrousseau/size-limit-config

# yarn
yarn add -D @sebastienrousseau/size-limit-config

# bun
bun add -d @sebastienrousseau/size-limit-config
```

---

## Quick Start

### In `package.json`

```json
{
  "size-limit": "@sebastienrousseau/size-limit-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/size-limit-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/size-limit-config";
export default config;
```

---

## Performance Bundle Budget Enforcement

Configures gzip/brotli size limits on library outputs to prevent bundle bloat regressions in CI.

### Before (Unstandardized)

```javascript
// Unmonitored bundle sizes
```

### After (@sebastienrousseau/size-limit-config Enforced)

```javascript
// .size-limit.js
module.exports = require("@sebastienrousseau/size-limit-config");
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/size-limit-config.git
cd size-limit-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).

// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * 100% Feature Showcase for @sebastienrousseau/size-limit-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log(
  "=== 100% Feature Showcase: @sebastienrousseau/size-limit-config ===",
);
assert(Array.isArray(config) && config.length === 2);
assert(
  config.some(
    (item) => item.path === "dist/index.js" && item.limit === "10 KB",
  ),
);
assert(
  config.some(
    (item) => item.path === "dist/index.mjs" && item.limit === "10 KB",
  ),
);

console.log("  ✓ Tracked bundles:", config.length);
config.forEach((b) => console.log(`  ✓ Path: ${b.path} (Limit: ${b.limit})`));
console.log("✅ 100% of size-limit-config budgets and paths validated.");

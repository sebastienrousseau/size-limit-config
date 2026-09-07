/**
 * Advanced custom size limit configuration
 */
const base = require("../index.cjs");
const custom = base.map(b => ({ ...b, limit: "5 KB" }));
console.log("Tightened bundle limits to:", custom[0].limit);

// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

export type SizeLimitConfig = ReadonlyArray<Record<string, unknown>>;

declare const config: SizeLimitConfig;
export default config;

# Escalation Report — Vulnerabilities Without Clean Fix Paths

**Date:** 2026-05-21

The following packages cannot be patched by bumping a manifest entry alone.
Overrides would mechanically resolve them but were NOT applied automatically.
Review each item and decide whether to apply the suggested override.

---

## Item 1 — @babel/helpers (MODERATE)

| Field | Value |
|-------|-------|
| Package | `@babel/helpers@7.20.1` |
| Severity | MODERATE |
| Advisory IDs | GHSA-968p-4wvh-cqc8 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.@babel/helpers = "7.26.10"` |

- **GHSA-968p-4wvh-cqc8**: Babel has inefficient RegExp complexity in generated code with .replace when transpiling named captu

## Item 2 — @babel/traverse (CRITICAL)

| Field | Value |
|-------|-------|
| Package | `@babel/traverse@7.20.1` |
| Severity | CRITICAL |
| Advisory IDs | GHSA-67hx-6x53-jw92 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.@babel/traverse = "7.23.2"` |

- **GHSA-67hx-6x53-jw92**: Babel vulnerable to arbitrary code execution when compiling specifically crafted malicious code

## Item 3 — bn.js (MODERATE)

| Field | Value |
|-------|-------|
| Package | `bn.js@5.2.1` |
| Severity | MODERATE |
| Advisory IDs | GHSA-378v-28hj-76wf |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.bn.js = "5.2.3"` |

- **GHSA-378v-28hj-76wf**: bn.js affected by an infinite loop

## Item 4 — brace-expansion (MODERATE)

| Field | Value |
|-------|-------|
| Package | `brace-expansion@1.1.11` |
| Severity | MODERATE |
| Advisory IDs | GHSA-f886-m6hf-6m8v, GHSA-v6h2-p8h4-qcjw |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.brace-expansion = "1.1.13"` |

- **GHSA-f886-m6hf-6m8v**: brace-expansion: Zero-step sequence causes process hang and memory exhaustion
- **GHSA-v6h2-p8h4-qcjw**: brace-expansion Regular Expression Denial of Service vulnerability

## Item 5 — braces (HIGH)

| Field | Value |
|-------|-------|
| Package | `braces@3.0.2` |
| Severity | HIGH |
| Advisory IDs | GHSA-grv7-fg5c-xmjg |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.braces = "3.0.3"` |

- **GHSA-grv7-fg5c-xmjg**: Uncontrolled resource consumption in braces

## Item 6 — cross-spawn (HIGH)

| Field | Value |
|-------|-------|
| Package | `cross-spawn@7.0.3` |
| Severity | HIGH |
| Advisory IDs | GHSA-3xgq-45jj-v275 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.cross-spawn = "7.0.5"` |

- **GHSA-3xgq-45jj-v275**: Regular Expression Denial of Service (ReDoS) in cross-spawn

## Item 7 — elliptic (CRITICAL)

| Field | Value |
|-------|-------|
| Package | `elliptic@6.5.4` |
| Severity | CRITICAL |
| Advisory IDs | GHSA-fc9h-whq2-v747, GHSA-49q7-c7j4-3p7m, GHSA-977x-g7h5-7qgw, GHSA-848j-6mx2-7j84, GHSA-f7q4-pwc6-w24p |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.elliptic = "6.6.1"` |

- **GHSA-fc9h-whq2-v747**: Valid ECDSA signatures erroneously rejected in Elliptic
- **GHSA-49q7-c7j4-3p7m**: Elliptic allows BER-encoded signatures
- **GHSA-977x-g7h5-7qgw**: Elliptic's ECDSA missing check for whether leading bit of r and s is zero

## Item 8 — form-data (CRITICAL)

| Field | Value |
|-------|-------|
| Package | `form-data@3.0.1` |
| Severity | CRITICAL |
| Advisory IDs | GHSA-fjxv-7rqg-78g4 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.form-data = "3.0.4"` |

- **GHSA-fjxv-7rqg-78g4**: form-data uses unsafe random function in form-data for choosing boundary

## Item 9 — semver (HIGH)

| Field | Value |
|-------|-------|
| Package | `semver@7.3.8` |
| Severity | HIGH |
| Advisory IDs | GHSA-c2qf-rxjj-qqgw |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.semver = "7.5.2"` |

- **GHSA-c2qf-rxjj-qqgw**: semver vulnerable to Regular Expression Denial of Service

## Item 10 — json5 (HIGH)

| Field | Value |
|-------|-------|
| Package | `json5@2.2.1` |
| Severity | HIGH |
| Advisory IDs | GHSA-9c47-m6qq-7p4h |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.json5 = "2.2.2"` |

- **GHSA-9c47-m6qq-7p4h**: Prototype Pollution in JSON5 via Parse Method

## Item 11 — micromatch (MODERATE)

| Field | Value |
|-------|-------|
| Package | `micromatch@4.0.5` |
| Severity | MODERATE |
| Advisory IDs | GHSA-952p-6rrq-rcjv |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.micromatch = "4.0.8"` |

- **GHSA-952p-6rrq-rcjv**: Regular Expression Denial of Service (ReDoS) in micromatch

## Item 12 — minimatch (HIGH)

| Field | Value |
|-------|-------|
| Package | `minimatch@3.1.2` |
| Severity | HIGH |
| Advisory IDs | GHSA-7r86-cg39-jmmj, GHSA-3ppc-4f35-3m26, GHSA-23c5-xmqv-rm74 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.minimatch = "3.1.4"` |

- **GHSA-7r86-cg39-jmmj**: minimatch has ReDoS: matchOne() combinatorial backtracking via multiple non-adjacent GLOBSTAR segmen
- **GHSA-3ppc-4f35-3m26**: minimatch has a ReDoS via repeated wildcards with non-matching literal in pattern
- **GHSA-23c5-xmqv-rm74**: minimatch ReDoS: nested *() extglobs generate catastrophically backtracking regular expressions

## Item 13 — picomatch (HIGH)

| Field | Value |
|-------|-------|
| Package | `picomatch@2.3.1` |
| Severity | HIGH |
| Advisory IDs | GHSA-c2c7-rcm5-vvqj, GHSA-3v7f-55p6-f55p |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.picomatch = "2.3.2"` |

- **GHSA-c2c7-rcm5-vvqj**: Picomatch has a ReDoS vulnerability via extglob quantifiers
- **GHSA-3v7f-55p6-f55p**: Picomatch: Method Injection in POSIX Character Classes causes incorrect Glob Matching

## Item 14 — ws (HIGH)

| Field | Value |
|-------|-------|
| Package | `ws@7.4.6` |
| Severity | HIGH |
| Advisory IDs | GHSA-3h5v-q93c-6h6q |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.ws = "7.5.10"` |

- **GHSA-3h5v-q93c-6h6q**: ws affected by a DoS when handling a request with many HTTP headers

---

## Decision Required

For the items above, the only mechanical fix is an override.
Reply with package names or advisory IDs to override, or 'none' to leave them unresolved.

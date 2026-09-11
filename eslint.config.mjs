import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // react-hooks/immutability assumes React-state semantics. Three.js
    // objects returned by r3f hooks (camera, refs to meshes/groups) are
    // meant to be mutated every frame inside useFrame, that's the
    // documented, correct way to animate them, it just runs outside
    // React's render cycle so the rule can't see that it's safe here.
    files: ["src/components/three/**/*.tsx"],
    rules: {
      "react-hooks/immutability": "off",
    },
  },
]);

export default eslintConfig;

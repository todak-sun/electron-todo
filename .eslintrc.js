/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "next/core-web-vitals"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "prettier"],
  rules: {
    // eslint
    "arrow-body-style": ["error", "as-needed"],
    "linebreak-style": "off",
    // "no-console": ["error", { allow: ["warn", "error"] }],
    "no-param-reassign": ["error"], // Maybe need to change it when using immutable state management library
    "no-unused-expressions": ["error", { allowShortCircuit: true }],
    "no-unused-vars": "off",
    "no-use-before-define": ["error", { functions: false }],
    "sort-imports": ["error", { ignoreCase: true, ignoreDeclarationSort: true }],

    // eslint-config-next
    "@next/next/no-html-link-for-pages": "off",

    // eslint-plugin-react
    "react/button-has-type": "off",
    "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-no-useless-fragment": [2, { allowExpressions: true }],
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [
          { char: ">", alternatives: ["&gt;"] },
          { char: "}", alternatives: ["&#125;"] },
        ],
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/self-closing-comp": ["error", { component: true, html: true }],

    // eslint-plugin-react-hooks
    "react-hooks/exhaustive-deps": "off",

    // eslint-plugin-import
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
        pathGroups: [{ pattern: "~/**", group: "internal", position: "after" }],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],

    // note you must disable the base rule as it can report incorrect errors,
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-function": ["error", { allow: ["decoratedFunctions"] }],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-var-requires": "off",

    // prettier
    "prettier/prettier": ["error", { endOfLine: "auto" }],

    // jsx-a11y
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",

    // ETC
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
  },
};

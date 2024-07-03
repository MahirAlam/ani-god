/* eslint-disable filenames/match-regex */
const project = "./tsconfig.json";

/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project,
    strict: true,
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
  },
  root: true,
  globals: {
    React: true,
  },
  settings: {
    compat: true,
    "import/resolver": { typescript: { project } },
    "jsx-a11y": {
      polymorphicPropName: "component",
      components: {
        Button: "button",
        Icon: "svg",
        ActionIcon: "button",
        Image: "img",
        Input: "input",
        Link: "a",
        List: "ul",
        ListItem: "li",
        TextInput: "input",
        Textarea: "textarea",
        Select: "select",
        Option: "option",
        Checkbox: "input",
        Radio: "input",
        CheckboxGroup: "div",
        RadioGroup: "div",
        Switch: "input",
        Slider: "input",
        NumberInput: "input",
        FileInput: "input",
        DatePicker: "input",
        TimeInput: "input",
        DateTimeInput: "input",
        ColorInput: "input",
        RangeSlider: "input",
        Rating: "div",
        Badge: "span",
        Progress: "div",
        Tooltip: "div",
      },
    },
    react: {
      version: "detect",
    },
  },
  plugins: [
    "unicorn",
    "import",
    "@typescript-eslint",
    "@tanstack/eslint-plugin-query",
    "simple-import-sort",
    "@tanstack/query",
    "react",
    "prettier",
    "drizzle",
  ],
  extends: [
    "strict",
    "strict-react",
    "prettier",
    "next",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
    "plugin:react/recommended",
    "plugin:drizzle/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "filenames/match-regex": [2, "^[a-z]+(?:[A-Z][a-z]+)*$", true],
    "react/jsx-no-bind": [
      2,
      {
        allowArrowFunctions: true,
      },
    ],
    "react/forbid-component-props": "off",
    "filenames/no-index": "off",
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".tsx", ".jsx"],
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: true,
        },
      },
    ],
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      { ignoreArrowShorthand: true },
    ],
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: false },
    ],
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: [
          "function-declaration",
          "function-expression",
          "arrow-function",
        ],
        unnamedComponents: "arrow-function",
      },
    ],
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "no-console": "warn",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "import/no-default-export": "off",
    "@typescript-eslint/require-await": "off",
    "drizzle/enforce-delete-with-where": "error",
    "drizzle/enforce-update-with-where": "error",
  },
};

module.exports = config;

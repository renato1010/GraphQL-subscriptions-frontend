# PickFu Frontend Challenge

## Scaffolding the project

Will use [Vite](https://vitejs.dev/) tool to configure the project

```bash
yarn create vite
```

with Options:

- Project name: pickfu-frontend
- template react-ts

## Set Router and Style framework

### Router:

```bash
yarn add react-router-dom
```

```bash
yarn add @types/react-router-dom -D
```

### Style framework [TailwindCSS](https://tailwindcss.com/)

deps:

```bash
yarn add autoprefixer postcss tailwindcss -D
```

create config files:

```bash
touch tailwind.config.js postcss.config.js
```

At `src/index.css`

```css
@import 'tailwindcss/base';

@import 'tailwindcss/components';

@import 'tailwindcss/utilities';
```

## Lint and Format

Minimal Typescript linting rules applied at [`.eslintrc.js`](.eslintrc.js)  
We do not need lint config files and others so there we have [`.eslintignore`](.eslintignore) file

Also need to config Prettier formatter to play nice with the linter

Install dep:

```bash
yarn add -D eslint-config-prettier
```

Then only add `"prettier"` to the "extends" array in [`.eslintrc.js`](.eslintrc.js)

```json
{
  "extends": ["some-other-config-you-use", "prettier"]
}
```

Add preference rules for Prettier at [`.prettierrc`](.prettierrc)

```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5",
  "jsxBracketSameLine": true
}
```

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
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
```

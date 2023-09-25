import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  headScripts: [
    'https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
  ],
});

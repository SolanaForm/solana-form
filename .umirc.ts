import { defineConfig } from "umi";

export default defineConfig({
  plugins: [
    require.resolve('@umijs/plugins/dist/unocss')
  ],
  unocss: {
    watch: ['src/**/*.tsx']
  },
  routes: [
    { path: "/", component: "index" },
    { path: "/confirm", component: "confirm" },
    { path: "/builder", component: "builder" },
  ],
  npmClient: 'pnpm',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  styles: [
    `html, body, #root {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }`,
    `html {
      height: 100%;
    }`
  ],
  headScripts: [
    'https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
  ],
});

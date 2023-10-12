module.exports = {
    exclude: [
        '**/node_modules/**',
    ],
    "includeVersion": true,
    "githubPages":false,
    "entryPoints": ["src/index.ts"],
    "out": "docs",
    "disableSources": true,
    "readme": "none", // readme
    "name": "lexi-utils文档",
    "plugin": ["typedoc-plugin-markdown"],
   
};
import { defineConfig } from 'vitepress';
import crateSidebar from './plugins/createSidebar';

export default defineConfig({
  vite: {
    plugins: [
      crateSidebar({
        ignoreList:['node_modules'],
        path: '../docs',
        titleFromFile: true,
      }),
    ],
    build:{
      // outDir:'../public',
      // assetsDir:'../public',
    }
  },
  title: 'lexi-utils文档',
  description: '',
  head: [
    [
      'link',
      {
        rel: 'icon',
      },
    ],
  ],
  appearance: true,
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    siteTitle: 'lexi-utils文档',
    outline: 'deep',
    search: {
      provider: 'local',
    },
    footer: {
      copyright: 'Copyright © 2022-2023 zerosper.com All Rights Reserved.',
    },

    nav: [
      {
        text: 'Guide',
        activeMatch: '/index',
        link: '/index',
      },
      {
        text: 'API',
        link: '/api/',
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});

// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FunShapes and FunBreathing',
  tagline: 'calming and cardio',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'FunShapes and FunBreathing',
        logo: {
          alt: 'Project Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {type: 'doc', docId: 'requirements', label: 'Requirements', position: 'left'},
          {type: 'doc', docId: 'research', label: 'Research', position: 'left'},
          {type: 'doc', docId: 'algorithms', label: 'Algorithms', position: 'left'},
          {type: 'doc', docId: 'ui-design', label: 'UI Design', position: 'left'},
          {type: 'doc', docId: 'system-design', label: 'System Design', position: 'left'},
          {type: 'doc', docId: 'implementation', label: 'Implementation', position: 'left'},
          {type: 'doc', docId: 'testing', label: 'Testing', position: 'left'},
          {type: 'doc', docId: 'evaluation', label: 'Evaluation', position: 'left'},
          {type: 'doc', docId: 'appendices', label: 'Appendices', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        copyright:
          'Copyright © 2026 FunShapes and FunBreathing: calming and cardio<br/>All rights reserved.',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

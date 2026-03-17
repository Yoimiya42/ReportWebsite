// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const navDocItem = (label, slug) => ({
  to: `/docs/${slug}`,
  label,
  position: 'left',
  activeBaseRegex: `^/docs/${slug}/?$`,
});

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FunShapes and FunBreathing',
  tagline: 'calming and cardio',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://students.cs.ucl.ac.uk',
  baseUrl: '/2025/group9/',

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
        blog: false,
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
          {to: '/', label: 'Home', position: 'left', exact: true},
          navDocItem('Requirements', 'requirements'),
          navDocItem('Research', 'research'),
          navDocItem('Algorithms', 'algorithms'),
          navDocItem('UI Design', 'ui-design'),
          navDocItem('System Design', 'system-design'),
          navDocItem('Implementation', 'implementation'),
          navDocItem('Testing', 'testing'),
          navDocItem('Evaluation', 'evaluation'),
          navDocItem('Appendices', 'appendices'),
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

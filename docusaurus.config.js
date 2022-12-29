// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Joey Ma',
  tagline: 'Software Engineer',
  url: 'https://yoyoyojoe.github.io',
  // GitHub Pages adds a trailing slash to Docusaurus URLs by default
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/jam.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yoyoyojoe', // Usually your GitHub org/user name.
  projectName: 'yoyoyojoe.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yoyoyojoe/clever-subterfuge/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Clever Subterfuge',
        logo: {
          alt: 'My Site Logo',
          src: 'img/jam.png',
          height: 32,
          width: 32,
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'About',
          // },
          {to: '/about', label: 'About', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'about',
            label: 'Docs',
            position: 'left'
          },
          {
            href: 'https://github.com/yoyoyojoe/clever-subterfuge',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/yoyoyojoe',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/joeyma',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'CodesmithX (CSX) Slack',
                href: 'https://codesmithx.slack.com/join/shared_invite/zt-1l0ofirua-S57oCIKkC~IvYL0i1tUFfg#/shared-invite/email',
              },
              {
                label: 'Hack for LA',
                href: 'https://www.hackforla.org/join',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/16330123/yoyoyojoe',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Joey Ma. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

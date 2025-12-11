import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline:
    'An open-source, AI-augmented textbook for physical AI and humanoid robotics, leveraging Claude agents for dynamic content generation, personalization, and RAG-driven interactions.',
  favicon: '/img/favicon.webp',  // leading slash!
  
  // Set the production url of your site here
  
  url: 'https://areebayaseen15.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/AI_Humanoid_Robotics_textbook',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

   // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'areebayaseen15/', // Usually your GitHub org/user name.
  projectName: 'AI_Humanoid_Robotics_textbook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

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
          editUrl:
            'https://github.com/areebayaseen15/Ai-Humanoid-textbook/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/areebayaseen15/Ai-Humanoid-textbook/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // ensure this file exists
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/logo.webp', // leading slash
      navbar: {
        title: 'Physical AI & Humanoid Robotics Textbook',
        logo: {
          alt: 'My Site Logo',
          src: '/img/logo.webp', // leading slash
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            href: 'https://github.com/areebayaseen15',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/Introduction/introduction',
              },
            ],
          },
          {
            title: 'Social Profiles',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/areeba-yaseen-6523552b5/',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/areebayaseen15',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/areebayaseen15',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

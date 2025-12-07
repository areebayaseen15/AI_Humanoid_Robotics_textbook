import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'An open-source, AI-augmented textbook for physical AI and humanoid robotics, leveraging Claude agents for dynamic content generation, personalization, and RAG-driven interactions.',
  url: 'https://Ai-humanoid-textbook.vercel.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.webp',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'claude-code-hackathon', // Usually your GitHub org/user name.
  projectName: 'robotic-book', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'], 
  },

  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/logo.webp',
      navbar: {
        title: 'Physical AI & Humanoid Robotics Textbook',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.webp',
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
//           {
//             type: 'localeDropdown',
//             position: 'right',
//             i18n: {
//   defaultLocale: 'en',
//   locales: ['en', 'ur'],
//   localeConfigs: {
//     ur: {
//       label: 'اردو',
//       direction: 'rtl',
//     },
//   },
// },
//           },
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
                to: '/docs/introduction/intro',
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
        copyright: `Copyright � ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook, All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
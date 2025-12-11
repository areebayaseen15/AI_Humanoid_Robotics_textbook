import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline:
    'An open-source, AI-augmented textbook for physical AI and humanoid robotics, leveraging Claude agents for dynamic content generation, personalization, and RAG-driven interactions.',
  
  // ✅ FIXED URL & BASE
  url: 'https://aihumanoidtextbook.vercel.app',
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.webp',

  // GitHub pages deployment config
  organizationName: 'claude-code-hackathon', // GitHub org/user
  projectName: 'robotic-book', // Repo name

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
          customCss: require.resolve('./src/css/custom.css'),
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
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook, All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

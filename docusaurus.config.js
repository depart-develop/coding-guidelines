// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DEPART コーディングガイドライン",
  tagline: "",
  url: "https://depart-develop.github.io/coding-guidelines/",
  baseUrl: "/coding-guidelines/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "depart-develop",
  projectName: "coding-guidelines",

  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
    localeConfigs: {
      ja: {
        label: "日本語",
        htmlLang: "ja",
        direction: "ltr",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: "DEPART コーディングガイドライン",
        logo: {
          alt: "Depart",
          src: "img/logo.svg",
          srcDark: "img/logo_w.svg",
        },
        items: [
          {
            type: "doc",
            docId: "guidelines/intro",
            position: "left",
            label: "ガイドライン",
          },
          {
            type: "doc",
            docId: "naming_convention/README",
            position: "left",
            label: "命名規則",
          },
          {
            href: "https://depart-develop.github.io/coding-guidelines/pdf/depart-coding-guidelines.pdf",
            position: "right",
            label: "PDFファイル",
            target: "_blank",
          },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Guideline",
          //   items: [
          //     {
          //       label: "はじめに",
          //       to: "/guidelines/intro",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} depart Inc. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

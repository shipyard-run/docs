/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Shipyard',
  tagline: 'Something something cool',
  url: 'https://shipyard.run',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'shipyard-run', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Shipyard',
      logo: {
        alt: 'Shipyard',
        src: 'img/logo.svg',
      },
      items: [
        {docId: 'docs', to: 'docs/index', type:'doc', label: 'Docs', position: 'left'},
      ],
    },
    footer: {}
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

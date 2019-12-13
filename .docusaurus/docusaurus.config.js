export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Shipyard",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/doc1",
          "label": "Docs",
          "position": "left"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Docs",
              "to": "docs/doc1"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "Github",
              "to": "https://github.com/shipyard-run"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2019 Shipyard, Inc. Built with Docusaurus."
    }
  },
  "title": "Shipyard",
  "tagline": "Something something cool",
  "url": "https://shipyard.run",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "shipyard-run",
  "projectName": "docs",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/eveld/code/shipyard/docs/sidebars.js"
        },
        "theme": {
          "customCss": "/home/eveld/code/shipyard/docs/src/css/custom.css"
        }
      }
    ]
  ]
};
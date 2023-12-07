/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})

module.exports = {
  siteMetadata: {
    title: 'HomeGirlsUnite',
    siteUrl: process.env.SITE_URL
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.js'),
      },
    },
    {
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": process.env.SANITY_PROJECT_ID,
      "dataset": process.env.SANITY_DATASET,
      "token": process.env.SANITY_TOKEN || ''
    }
  }, {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: ['GA-TRACKING_ID']
    }
  }, {
    resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
        web: [
          {
            name: 'Inter',
            file: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
          },
        ],
      }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
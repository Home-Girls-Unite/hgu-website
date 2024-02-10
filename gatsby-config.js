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
    resolve: 'gatsby-plugin-mailchimp',
    options: {
        endpoint: process.env.MAILCHIMP_NEWSLETTER_LIST || '',
        timeout: 3500
    },
  }, {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [
        process.env.GA_ID || 'GA-TRACKINGID',
        process.env.GTM_ID || 'GTM-GTAGID'
      ],
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays processing pageview events on route update (in milliseconds)
        delayOnRouteUpdate: 0,
      }
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
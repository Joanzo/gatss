require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter with Typescript & Storybook`,
    description: `Modified from default Gatsby Starter adding typescript and storybook, preconfigured with linting ready for team development`,
    author: `joanzo.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `
          @import "global.scss";
          `,
        includePaths: [`${__dirname}/src/components/core/global`],
        useResolveUrlLoader: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

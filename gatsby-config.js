module.exports = {
    siteMetadata: {
        title: `Alex Doll Personal Site`,
        description: `A place to put my various projects and things that I am working on!`,
        author: `@alexdoll`,
    },
    plugins: [
        `gatsby-alias-imports`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/assets`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-embedder`,
                        options: {
                            customTransformers: [
                                // Your custom transformers
                            ],
                            services: {
                                // The service-specific options by the name of the service
                            },
                        },
                    },
                ],
            },
        },
        `gatsby-transformer-yaml`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-theme-ui`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-catch-links`,
        {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

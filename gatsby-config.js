require('dotenv').config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: `Fruitport Family Dentistry`,
        description: `Fruitport's permier Family Dentistry Practice`,
        author: `Colin Knebl`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/data`,
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
                icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'd0vm2bq2',
                dataset: 'production',
                watchMode: true,

                // a token with read permissions is required
                // if you have a private dataset
                token: process.env.SANITY_TOKEN,

                // If the Sanity GraphQL API was deployed using `--tag <name>`,
                // use `graphqlTag` to specify the tag name. Defaults to `default`.
                graphqlTag: 'default',
                // https://4le0odfg.api.sanity.io/v1/graphql/production/default
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};

const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
    siteMetadata: {
        title: `Zion Landscaping`,
        description: `Expert Landscaping services in LA/OC`,
        author: `Kevin Lee`,
    },
    plugins: [
        `gatsby-plugin-eslint`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-tailwind`,
                short_name: `starter`,
                start_url: `/`,
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.teal["400"],
                display: `minimal-ui`,
                icon: `src/images/tailwind-icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`tailwindcss`)(tailwindConfig),
                    require(`autoprefixer`),
                    ...(process.env.NODE_ENV === `production`
                        ? [require(`cssnano`)]
                        : []),
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-transformer-yaml`,
            options: {
                // Conditionally set the typeName so that we both use a lowercased and capitalized type name
                typeName: ({node}) => {
                    const name = node.sourceInstanceName
                    if (name === `services`) {
                        return `Service`
                    }
                    // if (name === `patio`) {
                    //     return `Patio`
                    // }
                    // if (name === `front-yard`) {
                    //     return `Front-yard`
                    // }
                    // if (name === `driveway`) {
                    //     return `Driveway`
                    // }
                    // if (name === `fireplace`) {
                    //     return `Fireplace`
                    // }
                    // if (name === `patio-cover`) {
                    //     return `Patio-cover`
                    // }
                    // if (name === `putting-green`) {
                    //     return `Putting-green`
                    // }
                    // if (name === `barbeque`) {
                    //     return `Barbeque`
                    // }
                    // if (name === `fire-place`) {
                    //     return `Fire-place`
                    // }
                    // if (name === `pool-deck`) {
                    //     return `Pool-deck`
                    // }
                    // if (name === `fountain`) {
                    //     return `Fountain`
                    // }

                    return name
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/services`,
                name: `services`,
            },
        },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         path: `${__dirname}/services/front-yard`,
        //         name: `front-yard`,
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         path: `${__dirname}/services/driveway`,
        //         name: `driveway`,
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         path: `${__dirname}/services/fire-place`,
        //         name: `fire-place`,
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         path: `${__dirname}/services/patio-cover`,
        //         name: `patio-cover`,
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         path: `${__dirname}/services/putting-green`,
        //         name: `putting-green`,
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         path: `${__dirname}/services/barbeque`,
        //         name: `barbeque`,
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         path: `${__dirname}/services/pool-deck`,
        //         name: `pool-deck`,
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         path: `${__dirname}/services/fire-place`,
        //         name: `fire-place`,
        //     },
        // },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         path: `${__dirname}/services/fountain`,
        //         name: `fountain`,
        //     },
        // },
    ],
};

module.exports = {
  siteMetadata: {
    title: `Logiciel Blog`,
    description: `Fetching data from local WP`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "gj.tenthkart.com",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `https://gj.tenthkart.com/graphql`,
        refetchInterval: 60,
      },
    },
  ],
}

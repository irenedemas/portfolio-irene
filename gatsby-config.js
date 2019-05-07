module.exports = {
  siteMetadata: {
    title: "Irene de Mas",
    author: "Irene de Mas",
    description: "Irene de Mas | Product Designer & Project Manager"
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins`]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630
            }
          },
          "gatsby-remark-copy-linked-files"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-124065524-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ]
};

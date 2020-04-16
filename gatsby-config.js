module.exports = {
   plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-plugin-styled-components`,
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'images',
            path: 'images',
         },
      },
   ],
}

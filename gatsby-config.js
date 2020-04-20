module.exports = {
   plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-plugin-styled-components`,
      },
      {
         resolve: 'gatsby-plugin-mdx',
         options: {
            defaultLayouts: {
               default: require.resolve('./src/components/layout.js'),
            },
            gatsbyRemarkPlugins: ['gatsby-remark-images'],
            plugins: ['gatsby-remark-images'],
         },
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'images',
            path: 'images',
         },
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'posts',
            path: 'posts',
         },
      },
   ],
}

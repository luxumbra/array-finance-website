require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    title: `array.finance: Invest in trusted & user curated portfolios`,
    siteTitle: `array.finance`,
    description: `Invest in trusted and user-curated portfolios`,
    siteDescription: `Quit protocol hopping and start earning. Create and easily invest in trusted portfolios, earning real returns.`,
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: `array.finance: Invest in trusted & user curated portfolios`,
    siteImage: '/array.jpg',
    image: '/array.jpg',
    defaultImage: '/array.jpg',
    url: `https://twitter.com/arrayfinance`,
    siteUrl: 'https://array.finance',
    author: '@arrayfinance',
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `array.finance: Invest in trusted & user curated portfolios`,
        short_name: `array.finance`,
        description: `Invest in trusted and user-curated portfolios`,
        start_url: `/`,
        background_color: `#17043A`,
        theme_color: `#0F30F5`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}

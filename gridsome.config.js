// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'My Gridsome project',
  plugins: [
    {
      use: '@zefman/gridsome-source-instagram',
      options: {
        username: 'instagram', // Instagram username
        typeName: 'InstagramPhoto' // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
      }
    }
  ]
}

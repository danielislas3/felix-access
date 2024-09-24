module.exports = {
  pwa: {
    name: 'IoT Project',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      display: 'standalone',
      background_color: '#ffffff'
    },
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/]
    }
  }
};
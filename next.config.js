const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
// const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");
const optimizedImages = require('next-optimized-images');
const sitemap = require('nextjs-sitemap-generator');  
const withManifest = require('next-manifest');
const withOffline = require('next-offline');
//const withPurgeCss = require('next-purgecss')
// Setup these before going anywehre 
const SITE_NAME = '';
const  SITE_URL = '';




sitemap({  
  baseUrl: SITE_URL,  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'public/'  ,
  ignoredExtensions: [
    'png',
    'jpg'
]
});
const manifest = {
  output: './public/',
  short_name: '',
  name: SITE_NAME,
  description: '',
  dir: 'ltr',
  lang: 'en',
  icons: [
    {
      src: 'favicon.ico',
      sizes: '32x32 48x48 96x96 128x128 144x144 192x192 256x256',
      type: 'image/x-icon',
    },
  ],
  start_url: '/',
  display: 'standalone',
  theme_color: '#4285F4',
  background_color: '#ffffff',
};

//withImages ,
module.exports = withPlugins([
  [withManifest({ manifest })],
  [withOffline, { dontAutoRegisterSw: false }],
  withCSS ,
  withFonts,
  //  withImages,
   [optimizedImages,{
      // inlineImageLimit :-1,
      handleImages: ['jpg','jpeg', 'png', 'svg', 'webp', 'gif' ,'ico']
    }]
], {
    
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    };
  }
});


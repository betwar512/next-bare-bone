const SITE_URL = ""
const SITE_NAME = ""
const ORG_NAME = ""

export const  LocalBussinesData = {
        type:"LocalBusiness",
        id: SITE_URL,
        name:SITE_NAME,
        description:"",
        url:SITE_URL,
        telephone:"03 9764 1617",
        email : "info@qcskinclinic.com.au",
        address : {
          "streetAddress" : "",
          "addressLocality" : "",
          "addressRegion" : "",
          "addressCountry" : "",
          "postalCode" : ""
        },
    geo:{
        latitude: '',
        longitude: '',
    },
    
    images:[
      SITE_URL + '/favicon.png',
      SITE_URL + '/images/main-imag.jpg'
        ]
       ,openingHoursSpecification:[
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "12:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday"
        ],
        "opens": "12:00",
        "closes": "23:00"
      }
    ]    
}

export const LogoInfo = {
    logo : SITE_URL + '/images/favicon.png',
    url : SITE_URL
}


export const SocialSEO = {
    type : "Person", 
    name : ORG_NAME,
    url : SITE_URL,
    sameAs : [
      'http://www.facebook.com/',
      'http://instagram.com/',
      'http://www.linkedin.com/in/',
      'http://plus.google.com/',
    ]
}




export default {
    title:'Home',
    titleTemplate:SITE_NAME + ' | %s',
    description: 'My project desc',
    openGraph: {
      type: 'Organization',
      locale: 'en_IE',
      site_name: SITE_NAME,
      url: SITE_URL,
      image: '',
      imageWidth: 1200,
      imageHeight: 1200
    },
    twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
    },
    facebook:{
        appId:''
    }
  };
import Head from 'next/head'

const Meta = (props) => (      
<Head>
{/* <title>{props.title}</title>
<meta name="keywords" content={props.keywords}/>
<meta name="description" content={props.desc} /> */}
{/* <meta name="theme-color" content="#f00"/> */}
<meta name="language" content="EN"/>
{/* <meta property="og:type" content="website" />
<meta name="og:title" property="og:title" content="" />
<meta name="og:description" property="og:description" content="" />
<meta property="og:site_name" content="" />
<meta property="og:url" content="" />  
<meta name="twitter:card" content="summary" /> 
<meta name="twitter:title" content={props.title} />
<meta name="twitter:description" content={props.desc} />
<meta name="twitter:site" content="" />
<meta name="twitter:creator" content="" />
<meta property="og:image" content="" />  
<meta name="twitter:image" content="" />   
<link rel="canonical" href="" /> */}
<link rel="apple-touch-icon" href="/favicon.ico"/>
{/* <link rel="manifest" href="/manifest.json"/> */}
<link rel='icon' href='/favicon.ico' />
</Head>
)
export default Meta
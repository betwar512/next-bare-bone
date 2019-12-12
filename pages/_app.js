import React from 'react';
import App from 'next/app';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../styles/common-style.css'
import Navbar from '../components/mains/navbar'
import FooterPage from '../components/mains/footer';
import SEO,{ LocalBussinesData } from '../config/next-seo.config';
import { DefaultSeo ,LocalBusinessJsonLd } from 'next-seo';
import Meta from '../components/mains/meta'

export default class MyApp extends App {
    // static async getInitialProps({ Component, ctx }) {
    //     let pageProps = {};

    //     if (Component.getInitialProps) {
    //         pageProps = await Component.getInitialProps(ctx)
    //     }

    //     return { pageProps };
    // };

    render() {
         const { Component, pageProps } = this.props;
        return ( 
            <>
             <Meta/>
            <DefaultSeo {...SEO} />
           <LocalBusinessJsonLd {...LocalBussinesData}/>
     <style jsx global>{`
     @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap');
      .main-page-content { 
        font-family: 'Libre Baskerville', serif;
         background: #4285F4;
         color: #323232;
      }
    `}
    </style>
        <Navbar/>
         <Component  {...pageProps} />
        <FooterPage/>
        </>
        );
    }
}
// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Manifest from 'next-manifest/manifest'
import { Config } from '../config/Config'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <Manifest href={"/public/manifest.json"} themeColor={Config.THEM_COLOR} />
        </Head>
  
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
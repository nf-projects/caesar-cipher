// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../util/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head >
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"></link>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
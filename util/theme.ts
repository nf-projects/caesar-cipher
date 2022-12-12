import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const theme = extendTheme({ 
    initialColorMode: 'system',
    useSystemColorMode: false,
    fontFamilies: {
      body: `'Raleway', sans-serif`,
      heading: `'Open Sans', sans-serif`,
    },    
 })

export default theme

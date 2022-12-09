// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
// const config: ThemeConfig = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
//   fontFamilies: {
//     body: `'Raleway', sans-serif`,
//     heading: `'Open Sans', sans-serif`,
//   },
// }

// 3. extend the theme
const theme = extendTheme({ 
    initialColorMode: 'system',
    useSystemColorMode: false,
    fontFamilies: {
      body: `'Raleway', sans-serif`,
      heading: `'Open Sans', sans-serif`,
    },    
 })

export default theme

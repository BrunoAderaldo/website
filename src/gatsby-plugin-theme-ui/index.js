import { tailwind } from '@theme-ui/presets'
import styles from './styles'
import fonts from './fonts'
import variants from './variants'

export default {
  initialColorMode: 'light',
  useCustomProperties: true,
  useColorSchemeMediaQuery: false,
  colors: {
    text: {
      primary: '#222639',
      secondary: '#3C4856',
      tertiary: '#577190',
      body: '#869AB8',
      link: '#0180FF',
      bejamas: '#DA3654'
    },
    background: {
      default: '#FFF',
      primary: '#F4F7FC',
      secondary: '#FFF'
    }
    // modes: {
    //   dark: {
    //     text: {
    //       primary: '#222639',
    //       secondary: '#3C4856',
    //       tertiary: '#577190',
    //       body: '#869AB8',
    //       link: '#0180FF'
    //     },
    //     background: {
    //       default: '#000',
    //       primary: '#F4F7FC',
    //       secondary: '#FFF'
    //     }
    //   }
    // }
  },
  fonts: {
    ...fonts
  },
  styles: {
    ...tailwind.styles,
    ...styles
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  ...variants
}

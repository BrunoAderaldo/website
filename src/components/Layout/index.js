/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Global } from '@emotion/core'
import GlobalStyles from './GlobalStyles'
// import { useHotkeys } from 'react-hotkeys-hook'
import SEO from 'components/SEO'

const Layout = ({ children, seo }) => {
  // const [colorMode, setColorMode] = useColorMode()

  /* useHotkeys(
    'cmd+i',
    () => {
      setColorMode(colorMode === 'light' ? 'dark' : 'light')
      window.localStorage.removeItem('theme-ui-color-mode')
    },
    [colorMode]
  ) */

  return (
    <Styled.root>
      <Global styles={GlobalStyles} />
      {/* <ColorMode /> */}
      <SEO {...seo} />
      <main>{children}</main>
    </Styled.root>
  )
}

export default Layout

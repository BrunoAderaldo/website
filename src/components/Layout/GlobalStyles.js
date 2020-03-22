import { css } from '@emotion/core'

const GlobalStyles = () => css`
  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:focus {
      outline: 0;
    }
  }

  img {
    display: block;
    width: 100%;
    max-width: 100%;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
    text-align: center;
    transition: all 0.2s ease-in-out;

    &:focus {
      outline: 0;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`

export default GlobalStyles

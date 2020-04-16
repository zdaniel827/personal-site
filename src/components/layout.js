import React from 'react'
import Header from './header'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  color: #000;
}

a {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
color: #222;
line-height: 1.1;

+ * {
   margin-top: 0.5rem;
}
}
`

const Layout = ({ children }) => {
   return (
      <>
         <Global />
         <Header />
         <main>{children}</main>
      </>
   )
}

export default Layout

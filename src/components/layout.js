import React from 'react'
import Header from './header'
import styled, { createGlobalStyle } from 'styled-components'

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

const StyledMain = styled.main`
   margin: 2rem auto 4rem;
   max-width: 90vw;
   width: 750px;
`
const Layout = ({ children }) => {
   return (
      <>
         <Global />
         <Header />
         <StyledMain>{children}</StyledMain>
      </>
   )
}

export default Layout

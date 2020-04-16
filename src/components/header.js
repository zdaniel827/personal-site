import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Nav from './nav'

const Head = styled.header`
   display: flex;
   flex-direction: column;
   text-transform: uppercase;
`

const Header = () => {
   return (
      <Head>
         <Logo />
         <Nav />
      </Head>
   )
}

export default Header

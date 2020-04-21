import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import SocialMedia from './social-media'

const StyledFooter = styled.footer`
   position: absolute;
   bottom: 0;
   width: 100%;
   background-color: #888;
   display: flex;
   flex-direction: column;
   justify-content: center;
`


const Footer = () => (
   <StyledFooter>
      <SocialMedia />
      <Logo />
   </StyledFooter>
)

export default Footer

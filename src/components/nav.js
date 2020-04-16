import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNav = styled.nav`
   display: flex;
   justify-content: center;
   border-top: 4px solid #888;
`

const StyledLink = styled(Link)`
   padding: 1rem 0.5rem;
   margin: 0 1rem;
   letter-spacing: 2px;

   &:hover {
      transform: scale(1.1);
      text-decoration: underline;
   }
`

const Nav = () => (
   <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
   </StyledNav>
)

export default Nav

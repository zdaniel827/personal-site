import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLogo = styled(Link)`
   display: flex;
   justify-content: center;
   font-weight: 700;
   font-size: 2.5rem;
   letter-spacing: 1px;
   padding: 1rem 0;
`

const Logo = () => <StyledLogo to="/">&lt;/Zach Daniel&gt;</StyledLogo>

export default Logo

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const Gradient = styled.div`
   background-image: linear-gradient(to top, #ffffff 0.5rem, #ddbbff00);
   display: flex;
   flex-direction: column;
   height: 100%;
   justify-content: flex-end;
   padding: 0 calc((100vw - 550px - 0.5rem) / 2) 2rem;
   width: 100%;
`

const ImageBackground = styled(BackgroundImage)`
   background-position: top 35% center;
   background-size: cover;
   height: 50vh;
`

const Hero = () => {
   const { image } = useStaticQuery(graphql`
      query {
         image: file(relativePath: { eq: "luca-micheli-mn.jpg" }) {
            sharp: childImageSharp {
               fluid {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `)

   return (
      <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
         <Gradient />
      </ImageBackground>
   )
}

export default Hero

import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faGithub,
   faTwitter,
   faInstagram,
   faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const SocialMediaBanner = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   margin: 1rem 0;
   & > a {
      margin-right: 0.5rem;
      font-size: 1.5rem;
   }
   & > a:last-child {
      margin-right: 0;
   }
`

const SocialMedia = () => (
   <SocialMediaBanner>
      <a
         href="https://github.com/zdaniel827"
         target="_blank"
         rel="noopener norefferer"
      >
         <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
         href="https://www.linkedin.com/in/zacharydaniel827/"
         target="_blank"
         rel="noopener norefferer"
      >
         <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
         href="https://twitter.com/zachb_daniel"
         target="_blank"
         rel="noopener norefferer"
      >
         <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
         href="https://www.instagram.com/zachary_daniel/"
         target="_blank"
         rel="noopener norefferer"
      >
         <FontAwesomeIcon icon={faInstagram} />
      </a>
   </SocialMediaBanner>
)

export default SocialMedia

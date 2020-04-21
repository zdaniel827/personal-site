import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import ContactForm from '../components/contact-form'

export default () => (
   <>
      <Layout>
         <h1>Contact Me</h1>
         <p>Here's how you can contact me</p>
         <div>
            <a href="mailto:zdaniel827@gmail.com">Email</a>
            </div>
            <ContactForm />
         <Link to="/">&larr; back to home</Link>
      </Layout>
   </>
)

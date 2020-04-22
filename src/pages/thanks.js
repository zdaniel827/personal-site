import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

export default () => (
   <Layout>
      <h1>Thank you!</h1>
      <p>This is a custom thank you page for form submissions</p>
      <Link to="/">&larr; back to home</Link>
   </Layout>
)

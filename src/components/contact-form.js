import React, { useState } from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
   return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}

const ContactForm = () => {
   const [state, setState] = useState({})

   const handleChange = event => {
      setState({ ...state, [event.target.name]: event.target.value })
   }

   const handleSubmit = event => {
      event.preventDefault()
      console.log(state)
      const form = event.target

      fetch('/', {
         method: 'POST',
         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
         body: encode({
            'form-name': form.getAttribute('name'),
            ...state,
         }),
      })
         .then(() => navigate(form.getAttribute('action')))
         .catch(error => alert(error))
   }

   return (
      <form
         name="contact"
         method="post"
         action="/thanks"
         data-netlify="true"
         data-netlify-honeypot="bot-field"
         onSubmit={handleSubmit}
      >
         <input type="hidden" name="form-name" value="contact" />
         <label>
            Name
            <input
               type="text"
               name="name"
               value={state.name}
               onChange={handleChange}
            />
         </label>
         <label>
            Email
            <input
               type="email"
               name="email"
               value={state.email}
               onChange={handleChange}
            />
         </label>
         <label>
            Body
            <textarea name="body" value={state.body} onChange={handleChange} />
         </label>
         <button type="submit">Send</button>
      </form>
   )
}

export default ContactForm

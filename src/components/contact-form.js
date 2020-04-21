import React, { useReducer } from 'react'

const INITIAL_STATE = {
   name: '',
   email: '',
   body: '',
   status: 'IDLE',
}

const reducer = (state, action) => {
   switch (action.type) {
      case 'updateFieldValue':
         return { ...state, [action.field]: action.value }
      case 'updateStatus':
         return { ...state, status: action.status }
      case 'rest':
      default:
         return INITIAL_STATE
   }
}

const ContactForm = () => {
   const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

   const setStatus = status => dispatch({ type: 'updateStatus', status })

   const updateFieldValue = field => event => {
      dispatch({
         type: 'updateFieldValue',
         field,
         value: event.target.value,
      })
   }

   const handleSubmit = event => {
      event.preventDefault()
      setStatus('PENDING')

      fetch('/api/contact', {
         method: 'POST',
         body: JSON.stringify(state),
      })
         .then(response => response.json())
         .then(response => {
            setStatus('SUCCESS')
            console.log(response)
         })
         .catch(error => {
            console.error(error)
            setStatus('ERROR')
         })
   }

   if (state.status === 'SUCCESS') {
      return (
         <p>
            Message sent!
            <button type="reset" onClick={() => dispatch({ type: 'reset' })}>
               Reset Form
            </button>
         </p>
      )
   }

   return (
      <>
         {state.status === 'ERROR' && (
            <p>Something went wrong! Please try again</p>
         )}
         <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
         >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
               <label>
                  Don’t fill this out:{' '}
                  <input
                     name="bot-field"
                     onChange={updateFieldValue('email')}
                  />
               </label>
            </p>
            <label>
               Name
               <input
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={updateFieldValue('name')}
               />
            </label>
            <label>
               Email
               <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={updateFieldValue('email')}
               />
            </label>
            <label>
               Body
               <textarea
                  name="body"
                  value={state.body}
                  onChange={updateFieldValue('body')}
               />
            </label>
            <button>Send</button>
         </form>
      </>
   )
}

export default ContactForm

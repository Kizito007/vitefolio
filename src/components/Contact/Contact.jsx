import React, { useState } from 'react'
import axios from "axios"
import Alert from '@material-ui/lab/Alert';
import {IconButton, Collapse, Box} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { contact } from '../../portfolio'
import './Contact.css'
import Spinner from "./Spinner"

const Contact = () => {
  if (!contact.email) return null

  const [email, setEmail] = useState(false);
  const [subject, setSubject] = useState(false);
  const [textField, setText] = useState(false);
  const [fullname, setFullname] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState();
  let [open, setOpen] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
        setIsLoading(true)
        const to = "nwakakelechi49@gmail.com"
        const sender = { email, subject, textField, to, fullname };
        const senderRes = await axios.post(
          "https://vast-bayou-66131.herokuapp.com/v1/dozie/sendMail",
          sender 
        );
        setIsLoading(false)
        setResponse(senderRes.data.message)
        setOpen(true)
    } catch (err) {
      console.log(err)
      setResponse(senderRes.data.message)
    }
  }

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact Me</h2>

      <div id='contactt'>
        <h3 className='text-header'>Hey There 👋</h3>
        <p style={{fontSize: "21px", padding: "30px 0"}}>Get in touch with me through the form below! </p>
        
        {
        response ?
        <Box sx={{ width: '100%', py: "10px" }}>
          <Collapse in={open}>
            <Alert
                action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                    setOpen(false);
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
                }
                sx={{ mb: 2 }}
            >
              {response}
            </Alert>
          </Collapse>
        </Box>
        : null
      }

        <form onSubmit={submit}>
            <input type="text" onChange={e => setFullname(e.target.value)} id="fname" placeholder='Name' name="fname"/><br/><br/>
            <input type="email" onChange={e => setEmail(e.target.value)} id="email" placeholder='Email Address' name="email"/><br/><br/>
            <input type="text" onChange={e => setSubject(e.target.value)} id="subject" placeholder='Subject' name="subject"/><br/><br/>
            <textarea id="w3review" onChange={e => setText(e.target.value)} name="w3review" placeholder='Message' rows="10" cols="70"/><br /><br />
            {
              isLoading ?
              <> <Spinner /><br/> </>
              : null
            }     
            <button type="submit" className='btn btn--outline'>
              Send
            </button>
        </form>
    </div>
    </section>
  )
}

export default Contact

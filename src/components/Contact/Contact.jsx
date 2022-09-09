import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact Me</h2>
      {/* <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a> */}
      <div id='contactt'>
        <h3 className='text-header'>Hey There 👋</h3>
        <p style={{fontSize: "21px", padding: "50px 0"}}>Get in touch with me through the form below! </p><br/>
        <form>
            {/* <label for="fname">First name:</label><br/> */}
            <input type="text" id="fname" placeholder='Name' name="fname"/><br/><br/>
            {/* <label for="lname">Last name:</label><br/> */}
            <input type="email" id="email" placeholder='Email Address' name="email"/><br/><br/>
            <input type="text" id="subject" placeholder='Subject' name="subject"/><br/><br/>
            <textarea id="w3review" name="w3review" placeholder='Message' rows="10" cols="70"/><br /><br />
            <button type="submit" className='btn btn--outline'>
              Send
            </button>
        </form>
    </div>
    </section>
  )
}

export default Contact

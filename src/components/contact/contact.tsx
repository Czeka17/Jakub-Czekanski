import classes from './contact.module.css'
import {  ChangeEvent, useState } from 'react';
import emailjs from 'emailjs-com';
import ContactModal from './contact-modal';

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showModal,setShowModal] = useState(false)
    const [response,setResponse] = useState('')
    const [responseParagraph, setResponseParagraph] = useState('')

    function hideModalHandler(){
      setShowModal(false)
    }
    const handleNameChange = (event:ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
    const handleEmailChange = (event:ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    const handleMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(event.target.value);
    };

    const sendEmail = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if(!name || name.trim() === ''){
        setResponse('Error!')
        setResponseParagraph('Please enter your name.')
        setShowModal(true)
        return
      }
      if(!email || email.trim() === '' || !email.includes('@')){
        setResponse('Error!')
        setResponseParagraph('Please enter valid E-mail.')
        setShowModal(true)
        return
      }
      if(!message || message.trim() === ''){
        setResponse('Error!')
        setResponseParagraph('Please enter message.')
        setShowModal(true)
        return
      }
      emailjs.init('vRp5IMurts6MdqDZE');
    
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };
    
      emailjs.send('service_yuorp79', 'template_jg8c5jv', templateParams)
        .then((response) => {
          setResponse('Success!')
          setResponseParagraph('Email sent successfully!')
          setShowModal(true)
          console.log('Email sent successfully!', response.text);
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          setResponse('Error!')
          setResponseParagraph('Unexpected error happened!')
          setShowModal(true)
          console.error('Error sending email:', error);
        });
    };
    return<section id='contact' className={classes.contactSection}>
        <div className={classes.contactContainer}>
            <h2>CONTACT</h2>
            <form className={classes.contactForm} onSubmit={sendEmail} id='contact' >
            <div className={`${classes.contactFormName} ${name && classes.active}`}>
            <input type='text' name='name' id='name'  value={name}
              onChange={handleNameChange}/>
            <label htmlFor='name'>Name</label>
            </div>
            <div className={`${classes.contactFormEmail} ${email && classes.active}`}>
            <input type='text' name='email' id='email' value={email}
              onChange={handleEmailChange} />
              <label htmlFor='email'>E-mail</label>
            </div>
            <div className={`${classes.contactFormMessage} ${message && classes.active}`}>
            <textarea rows={5} id='message' value={message}
              onChange={handleMessageChange} ></textarea>
            <label htmlFor='message'>Message</label>
            </div>
            <button type='submit' className={classes.submitButton}>Submit</button>
            </form>
        </div>
        {showModal && <ContactModal hideModalHandler={hideModalHandler} response={response} responseParagraph={responseParagraph} />}
    </section>
}
export default Contact;
import classes from './contact.module.css'

function Contact(){

    return<section id='contact'>
        <div className={classes.contactContainer}>
            <h2>CONTACT</h2>
            <form className={classes.contactForm}>
            <div className={classes.contactFormName}>
            <label htmlFor='name' >Name</label>
            <input type='text' name='name' />
            </div>
            <div className={classes.contactFormEmail}>
            <label htmlFor='email'>E-mail</label>
            <input type='text' name='email' />
            </div>
            <div className={classes.contactFormMessage}>
            <label>Message</label>
            <textarea rows={5}></textarea>
            </div>
            <button type='submit' className={classes.submitButton}>Submit</button>
            </form>
        </div>
    </section>
}
export default Contact;
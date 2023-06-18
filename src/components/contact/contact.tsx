import classes from './contact.module.css'

function Contact(){

    return<section>
        <p className={classes.introduction}>LETS TALK ABOUT</p>
        <div className={classes.contactContainer}>
            <h2>CONTACT</h2>
            <form className={classes.contactForm}>
                <h3>GET IN TOUCH WITH ME</h3>
            <label htmlFor='name' >Name</label>
            <input type='text' name='name' />
            <label htmlFor='email'>E-mail</label>
            <input type='text' name='email' />
            <label>Message</label>
            <textarea></textarea>
            </form>
        </div>
    </section>
}
export default Contact;
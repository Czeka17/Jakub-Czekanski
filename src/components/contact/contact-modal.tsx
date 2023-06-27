import classes from './contact-modal.module.css'

interface ContactModalProps{
    hideModalHandler:() => void
    response: string
    responseParagraph: string
}
function ContactModal({hideModalHandler,response,responseParagraph}: ContactModalProps){
    return <div className={classes.modalContainer} data-testid="contact-modal">
        <div className={classes.modal}>
            <h3>{response}</h3>
            <p>{responseParagraph}</p>
            <button onClick={hideModalHandler}>OK</button>
        </div>
    </div>
}
export default ContactModal;
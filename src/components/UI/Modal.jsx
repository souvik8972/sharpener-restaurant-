
import classes from "./Modal.module.css"
import ReactDom from "react-dom"
const Backdrop = props => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = (props) => {
    const displyElement = document.getElementById("overlay")
    return (
        <>
            {ReactDom.createPortal(<Backdrop></Backdrop>, displyElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, displyElement)}

        </>
    )
}

export default Modal;
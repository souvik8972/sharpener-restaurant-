/* eslint-disable react/prop-types */
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";  // Correct the import statement


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    const displayElement = document.getElementById("overlay");
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart} />, displayElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, displayElement)}
        </>
    );
};

export default Modal;

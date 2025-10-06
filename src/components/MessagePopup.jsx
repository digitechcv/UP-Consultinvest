import '../css/MessagePopup.css';

import { FaRegFaceSmile } from "react-icons/fa6";
import { PiSmileySadLight } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import {useEffect, useRef} from "react";
import {AiOutlineLoading3Quarters} from "react-icons/ai";


const MessagePopup = ({message, type, showConfirmButton = false, showCloseButton = true, confirmButtonText = "", timer = 5000, closeFunc = () => {}, confirmFunc = () => {}, isOpen = false, setPopupOpen = () => {}} = {}) => {

    const popup = useRef();

    useEffect(() => {

        if(timer > 0) {
            const timerId = setTimeout(() => {
                onClose();
            }, timer);
            return () => clearTimeout(timerId);
        }
    }, [timer]);

    const onClose = () => {
        if(closeFunc) closeFunc();
        setPopupOpen(false);
    }

    const onConfirm = () => {
        if(confirmFunc) confirmFunc();
        onClose();
    }

    return (
        <>
            <div ref={popup} id="MessagePopup" className={`${type}_background popup ${isOpen ? 'show' : ''}`}>
                <div className="icon_container">
                    {type === 'success' ? <FaRegFaceSmile className="icon"/> : type === 'error' ? <PiSmileySadLight className="icon"/> : <></>}
                </div>
                <div className="message_container">
                    <p>{message}</p>
                </div>
                { showConfirmButton && type !== 'progress' ? <button className="confirm_button" onClick={onConfirm}>{confirmButtonText}</button> : <></> }
                <div className="btns_container">
                    { showCloseButton && type !== 'progress' ? <IoClose className="icon" onClick={onClose}/> : <></> }
                    { type === 'progress' ? <AiOutlineLoading3Quarters className="icon loading"/> : <></> }
                </div>
            </div>
        </>
    )
}

export default MessagePopup;
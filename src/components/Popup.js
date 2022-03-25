import './Popup.scss'

const Popup = ({isOpen, children, close}) => {
    const onClick = (e) =>{
        e.preventDefault();
        close();
    }
    return (
        <div className={`popup ${isOpen ? "popup--open" : ""}`}>
            <div className="popup__content">
                <button className="popup__close" onClick={onClick} >×</button>
                {children}
            </div>
        </div>

    )
}

export default Popup
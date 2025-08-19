import { IoClose } from "react-icons/io5";
import "../css/VerticalMenu.css";

const VerticalMenu = ({ showMenu, onClose }) => {
    
    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    
    return (
        <div className="VerticalMenu">
            {showMenu && <div className="bg" onClick={onClose} />}
            <div className={`container ${showMenu ? 'show' : ''}`}>
                <div className="header-container">
                    <IoClose onClick={onClose} className="icon"/>
                </div>
                <div className="menu">
                    <ul>
                        <li className="menu-option" onClick={() => scrollToId("home")}>Home</li>
                        <li className="menu-option" onClick={() => scrollToId("service")}>Serviços</li>
                        <li className="menu-option" onClick={() => scrollToId("about-us")}>Sobre</li>
                        <li className="menu-option" onClick={() => scrollToId("contact")}>Contato</li>
                    </ul>

                    <button className="menu-button">
                        <div className="animated_bg"></div>
                        <p onClick={() => scrollToId("contact")}>Solicitar Consultoria</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VerticalMenu;
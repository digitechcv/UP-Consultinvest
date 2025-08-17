import { FaEnvelope, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import "../css/header.css";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect } from "react";

const Header = () => {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById("header");
            if(window.scrollY > 250) {
                header.classList.add("fixed-header");
            }
            else header.classList.remove("fixed-header");
        };

        window.addEventListener("scroll", handleScroll);

        // cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="header-container">
            <div className="contact-header">
                <div className="contact-info">
                    <p>Consulting & Investment</p>
                </div>
                <div className="socials">
                    <FaFacebook className="icon"/>
                    <AiFillInstagram className="icon"/>
                </div>
            </div>
            <div id="header" className="header">
                <a href="#" className="logo">Up Consultinvest</a>
                <div className="menu">
                    <ul>
                        <li className="menu-option"><a href="#" className="menu-option-link">Home</a></li>
                        <li className="menu-option"><a href="#" className="menu-option-link">Serviços</a></li>
                        <li className="menu-option"><a href="#" className="menu-option-link">Sobre</a></li>
                        <li className="menu-option"><a href="#" className="menu-option-link">Contato</a></li>
                    </ul>

                    <button className="menu-button">Solicitar Consultoria</button>
                </div>
            </div>
        </section>
    )
}

export default Header;
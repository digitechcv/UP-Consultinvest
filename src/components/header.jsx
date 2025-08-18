import { FaEnvelope, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import "../css/header.css";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect } from "react";
import { IoLogoLinkedin } from "react-icons/io";

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

    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="header-container">
            <div className="contact-header">
                <div className="contact-info">
                    <p>Consulting & Investment</p>
                </div>
                <div className="socials">
                    <FaFacebook className="icon"/>
                    <AiFillInstagram className="icon"/>
                    <IoLogoLinkedin className="icon"/>
                </div>
            </div>
            <div id="header" className="header">
                <a href="#" className="logo">Up Consultinvest</a>
                <div className="menu">
                    <ul>
                        <li className="menu-option" onClick={() => scrollToId("home")}>Home</li>
                        <li className="menu-option" onClick={() => scrollToId("service")}>Serviços</li>
                        <li className="menu-option" onClick={() => scrollToId("about-us")}>Sobre</li>
                        <li className="menu-option" onClick={() => scrollToId("contact")}>Contato</li>
                    </ul>

                    <button className="menu-button">
                        <div className="animated_bg"></div>
                        <p>Solicitar Consultoria</p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header;
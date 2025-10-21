import { MdEmail } from "react-icons/md";
import "../css/footer.css"
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { CompanyInfo } from "../data/dummy";

const Footer = () => {

     const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const now = new Date();
        setYear(now.getFullYear());
    }, []);

    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="footer">
            <div className="info_container">
                <div className="company_info">
                    <h1>Up Consultinvest</h1>
                    <p className="sub-title">Transformamos ideias em negócios de sucesso através de consultoria especializada, marketing estratégico e investimentos inteligentes.</p>
                    <div className="contact_container">
                        <p><MdEmail/> {CompanyInfo.email}</p>
                        <p><FaPhoneAlt/> {CompanyInfo.contact}</p>
                    </div>
                </div>
                <div className="links">
                    <h2>Nossos Serviços</h2>
                    <ul>
                        <li onClick={() => scrollToId("service")}>Marketing Digital</li>
                        <li onClick={() => scrollToId("service")}>Consultoria Empresarial</li>
                        <li onClick={() => scrollToId("service")}>Investimentos</li>
                        <li onClick={() => scrollToId("service")}>Aceleração</li>
                        <li onClick={() => scrollToId("service")}>Incubação</li>
                    </ul>
                </div>
                <div className="links">
                    <h2>Links Rápidos</h2>
                    <ul>
                        <li onClick={() => scrollToId("home")}>Home</li>
                        <li onClick={() => scrollToId("service")}>Serviços</li>
                        <li onClick={() => scrollToId("about-us")}>Sobre</li>
                        <li onClick={() => scrollToId("contact")}>Contato</li>
                    </ul>
                </div>
            </div>
            <div className="bottom_container">
                <div className="copyright_container">
                    <p>© {year} <strong><a href="#">Up Consultinvest</a></strong>. Todos os direitos reservados.</p>
                </div>
                <div className="digitech">
                    Desgined by <a href="#" id="digitech">Digitech</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
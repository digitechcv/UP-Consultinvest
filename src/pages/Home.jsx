import "../css/general.css";
import "../css/home.css";
import { Header, ServiceCard } from "../components";
import heroBg from "../images/hero-consulting-KkA-Ji33.jpg";
import { FaArrowRight } from "react-icons/fa";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { services } from "../data/dummy";


const Home = () => {

    return(
        <>
          <Header/>
          <section className="hero-section">
            <img className="heroBg" src={heroBg}/>
            <div className="container">
                <div className="info">
                    <h1>Transformamos negócios com estratégia, criatividade e inovação.</h1>
                    <p>Consultoria, marketing, comunicação e finanças para empresas que querem crescer com solidez.</p>
                    <div className="hero-section-options">
                        <button className="start-button">Marcar Reunião <FaArrowRight className="icon"/> </button>
                        <button className="service-button">Solicitar Proposta</button>
                    </div>
                    <div className="hero-section-stats">
                        <div className="hero-section-stats-card">
                            <p><HiMiniArrowTrendingUp/> 300+</p>
                            <span>Empresas Aceleradas</span>
                        </div>
                        <div className="hero-section-stats-card">
                            <p><HiMiniArrowTrendingUp/> 300+</p>
                            <span>Capital Investido</span>
                        </div>
                        <div className="hero-section-stats-card">
                            <p><HiMiniArrowTrendingUp/> 300+</p>
                            <span>Taxa de Sucesso</span>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <section className="our-services">
            <h1 className="section-title">O que fazemos?</h1>
            <p className="section-caption">Apoiamos empresas e organizações nas áreas de comunicação, marketing digital, consultoria estratégica, eventos, finanças e aceleração de negócios.</p>

            <div className="service-container">
                {
                    services.map((service, index) => {
                        return (
                            <ServiceCard service={service} index={index}/>
                        );
                    })
                }
            </div>
          </section>
        </>
    )
}

export default Home;
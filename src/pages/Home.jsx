import "../css/general.css";
import "../css/home.css";
import { Header, ServiceCard, InfoCard } from "../components";
import heroBg from "../images/hero-consulting-KkA-Ji33.jpg";
import { FaArrowRight, FaFacebook } from "react-icons/fa";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { services, CompanyValues, OrganizationalIdentity } from "../data/dummy";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";


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

          <section className="our-services section">
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

          <section className="about-us section">
            <div className="about-us-title-container">
                <span className="about-us-title">Sobre a Up Consultinvest</span>
            </div>
            <div className="info-container">
                <div className="about-us-column">
                    <h1>Na <strong>Up Consultinvest</strong>, acreditamos que cada negócio tem potencial para alcançar novos patamares.</h1>
                    <p>Somos uma empresa de consultoria, marketing e inovação que apoia organizações em
                    diferentes fases de crescimento — desde o reposicionamento de marca até à captação de
                    investimento e expansão para novos mercados.</p>
                    <p>Combinamos estratégia sólida, criatividade diferenciada e visão de futuro, ajudando os
                    nossos clientes a transformar desafios em oportunidades. Trabalhamos lado a lado com
                    empreendedores, líderes e equipas, criando soluções personalizadas que geram resultados
                    concretos, crescimento sustentável e posicionamento de destaque no mercado.</p>
                    <p>O nosso compromisso vai além do curto prazo: queremos impulsionar marcas, negócios e
                    ideias para que sejam relevantes, competitivos e preparados para o amanhã.</p>

                    <div className="company-values">
                        {
                            CompanyValues.map((values, index) => {
                                return (
                                    <div key={index} className="company-values-card">
                                        <div className="icon-container"><IoMdCheckmarkCircleOutline className="icon"/></div>
                                        <p style={{color: "var(--secondary-color)"}}><strong>{values.title}</strong> - {values.description}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="about-us-column">
                    {
                        OrganizationalIdentity.map((elem, index) => {
                            return (
                                <InfoCard value={elem} key={index}/>
                            );
                        })
                    }
                </div>
            </div>
          </section>

          <section className="contact-us section">
            <h1 className="section-title">Queremos ouvir o que sua empresa precisa.</h1>
            <p className="section-caption">Estamos disponíveis para uma conversa estratégica.</p>

            <div className="contact-container">
                <div className="company-info">
                    <InfoCard value={{
                        title: "Email",
                        description: "contato@upconsultinvest.com",
                        icon: 2,
                    }}/>
                    <InfoCard value={{
                        title: "Telefone",
                        description: "+55 (11) 9999-9999",
                        icon: 3,
                    }}/>
                    <InfoCard value={{
                        title: "Localização",
                        description: "São Paulo, SP - Brasil",
                        icon: 4,
                    }}/>
                    <div className="social-container">
                        <div className="icon_container">
                            <FaFacebook className="icon"/>
                        </div>
                        <div className="icon_container">
                            <RiInstagramFill className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h1>Solicite uma Proposta</h1>
                    <p>Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.</p>
                    <form method="POST">
                        <div className="input_columns">
                            <div className="input_container">
                                <label htmlFor="name">Nome Completo *</label>
                                <input type="text" placeholder="Seu nome completo" id="name" />
                            </div>
                            <div className="input_container">
                                <label htmlFor="email">Email *</label>
                                <input type="email" placeholder="seu@email.com" id="email" />
                            </div>
                        </div>
                        <div className="input_columns">
                            <div className="input_container">
                                <label htmlFor="company">Empresa *</label>
                                <input type="text" placeholder="Nome da sua empresa" id="company" />
                            </div>
                            <div className="input_container">
                                <label htmlFor="service">Serviço desejado *</label>
                                <input type="text" placeholder="Tipo de serviço desejado" id="service" />
                            </div>
                        </div>
                        <div className="input_container">
                            <label htmlFor="message">Mensagem *</label>
                            <textarea id="message" placeholder="Conte-nos sobre o seu projeto e como podemos ajudar..."></textarea>
                        </div>
                        <button className="form-button" type="submit">Enviar Mensagem <FiSend/></button>
                    </form>
                </div>
            </div>
          </section>
        </>
    )
}

export default Home;
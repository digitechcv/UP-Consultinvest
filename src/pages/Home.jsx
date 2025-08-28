import "../css/general.css";
import "../css/home.css";
import { Header, ServiceCard, InfoCard, Footer, ServicePopup } from "../components";
import { FaArrowRight, FaFacebook } from "react-icons/fa";
import { services, CompanyValues, OrganizationalIdentity } from "../data/dummy";
import { IoLogoLinkedin, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { useRef, useState } from "react";
import company_image from "../images/concept-victory.jpg";

const Home = () => {

    const [ service, setService ] = useState({});
    const [ topic, setTopic ] = useState("");
    const selectedMethodRef = useRef();
    const [ dialogOpen, setDialogOpen ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const message = useRef();
    const name = useRef();
    const email = useRef();
    const role = useRef();
    const company = useRef();
    const topicRef = useRef();

    const onServiceDetail = (service) => {
        setService(service);
        setDialogOpen(true);
    }

    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const selectService = (selectedService) => {
        setTopic(selectedService);
        topicRef.current = selectedService;
        scrollToId("contact");
    }

    const number = "";

    const SendMessage = (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            if(selectedMethodRef) {
                if(selectedMethodRef.current === "whatsapp") {
                    const link = generateWhatsAppLink(number, generateMessageTemplate());
                }
                else {

                }
            }

        } catch {
            
        }
        finally {
            setLoading(false);
        }

    }

    function generateMessageTemplate() {
        templateMessage += "Assunto: " + topicRef.current;
        let templateMessage = "\n \n " + message.current;

        templateMessage += "\n \n Informações de Contato:";
        templateMessage += "\n \n Nome: " + name.current;
        templateMessage += "\n \n Email: " + email.current;
        templateMessage += "\n \n Empresa: " + company.current;
        return "";
    }

    function generateWhatsAppLink(phoneNumber, message) {
        const baseURL = "https://wa.me/";
        const encodedMessage = encodeURIComponent(message);
        return `${baseURL}${phoneNumber}?text=${encodedMessage}`;
    }

    const ChangeMethod = (method) => {
        selectedMethodRef.current = method;
    }

    return(
        <>
          <Header/>
          <ServicePopup isOpen={dialogOpen} onClose={() => setDialogOpen(false)} onSelect={selectService} service={service}/>
          <section id="home" className="hero-section">
            <div className="heroBg"></div>
            <div className="container">
                <div className="info">
                    <h1>Transformamos negócios com estratégia, criatividade e inovação.</h1>
                    <p>Consultoria, marketing, comunicação e finanças para empresas que querem crescer com solidez.</p>
                    <div className="hero-section-options">
                        <button className="service-button" onClick={() => scrollToId("contact")}>
                            <div className="animated_bg"></div>
                            <p>Marcar Reunião <FaArrowRight className="icon"/></p>
                        </button>
                    </div>
                </div>
            </div>
          </section>

          <section id="service" className="our-services section">
            <h1 className="section-title">O que fazemos?</h1>
            <p className="section-caption">Apoiamos empresas e organizações nas áreas de comunicação, marketing digital, consultoria estratégica, eventos, finanças e aceleração de negócios.</p>

            <div className="service-container">
                {
                    services.map((service, index) => {
                        return (
                            <ServiceCard service={service} key={index} index={index} onClick={onServiceDetail}/>
                        );
                    })
                }
            </div>
          </section>

          <section id="about-us" className="about-us section">
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
                </div>
                <div className="about-us-column second-column">
                    <div className="company-image">
                        <img src={company_image}/>
                    </div>
                </div>
            </div>
            <div className="info-container-2">
                <div className="info-container" style={{margin: '30px 0'}}>
                    {
                        OrganizationalIdentity.map((elem, index) => {
                            return (
                                <InfoCard value={elem} key={index}/>
                            );
                        })
                    }
                </div>

                <p className="values-section-title">Nossos valores</p>
                <div className="info-container">
                    <div className="company-values">
                        {
                            CompanyValues.map((values, index) => {
                                if(index < 3)
                                {
                                    return (
                                        <div key={index} className="company-values-card">
                                            <div className="icon-container"><IoMdCheckmarkCircleOutline className="icon"/></div>
                                            <p style={{color: "var(--secondary-color)"}}><strong>{values.title}</strong> - {values.description}</p>
                                        </div>
                                    );
                                }
                                else return (<></>)
                            })
                        }
                    </div>

                    <div className="company-values">
                        {
                            CompanyValues.map((values, index) => {
                                if(index >= 3){
                                    return (
                                        <div key={index} className="company-values-card">
                                            <div className="icon-container"><IoMdCheckmarkCircleOutline className="icon"/></div>
                                            <p style={{color: "var(--secondary-color)"}}><strong>{values.title}</strong> - {values.description}</p>
                                        </div>
                                    );
                                }
                                else return (<></>)
                            })
                        }
                    </div>
                </div>

            </div>
          </section>

          <section id="contact" className="contact-us section">
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
                            <div className="selector"></div>
                        </div>
                        <div className="icon_container">
                            <RiInstagramFill className="icon"/>
                            <div className="selector"></div>
                        </div>
                        <div className="icon_container">
                            <IoLogoLinkedin className="icon"/>
                            <div className="selector"></div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h1>Solicite uma Proposta</h1>
                    <p>Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.</p>
                    <form method="POST" onSubmit={SendMessage}>
                        <div className="input_columns">
                            <div className="input_container">
                                <label htmlFor="name">Nome Completo *</label>
                                <input onChange={(e) => name.current = e.target.value} type="text" placeholder="Seu nome completo" id="name"  required/>
                            </div>
                            <div className="input_container">
                                <label htmlFor="email">Email *</label>
                                <input onChange={(e) => email.current = e.target.value} type="email" placeholder="seu@email.com" id="email"  required/>
                            </div>
                        </div>
                        <div className="input_columns">
                            <div className="input_container">
                                <label htmlFor="company">Empresa *</label>
                                <input onChange={(e) => company.current = e.target.value} type="text" placeholder="Nome da sua empresa" id="company"  required/>
                            </div>
                            <div className="input_container">
                                <label htmlFor="role">Cargo *</label>
                                <input onChange={(e) => role.current = e.target.value} type="text" placeholder="Gerente" id="role"  required/>
                            </div>
                            <div className="input_container">
                                <label htmlFor="service">Serviço desejado *</label>
                                <select id="service" value={topic} onChange={(e)=> {
                                    setTopic(e.target.value);
                                    topicRef.current = e.target.value;
                                }} required>
                                    {
                                        services.map((elem, index) => {
                                            return(
                                                <option key={index} value={elem.title}>{elem.title}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="input_container">
                            <label htmlFor="message">Mensagem *</label>
                            <textarea onChange={(e) => message.current = e.target.value} id="message" placeholder="Conte-nos sobre o seu projeto e como podemos ajudar..." required></textarea>
                        </div>
                        <div className="input_container">
                            <label htmlFor="send_option">Enviar por:</label>
                            <select name="send_option" defaultValue="null" id="send_option" onChange={(e) => ChangeMethod(e.target.value)} required>
                                <option value="null" disabled unselectable>Escolha o método de envio</option>
                                <option value="email">Email</option>
                                <option value="whatsapp">WhatsApp</option>
                            </select>
                        </div>
                        <button className="form-button" type="submit">Enviar Mensagem <FiSend/></button>
                    </form>
                </div>
            </div>
          </section>

          <Footer/>
        </>
    )
}

export default Home;
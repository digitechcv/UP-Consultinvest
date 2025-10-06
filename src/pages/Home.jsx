import "../css/general.css";
import "../css/home.css";
import { Header, ServiceCard, InfoCard, Footer, ServicePopup, MessagePopup } from "../components";
import { FaArrowRight, FaFacebook } from "react-icons/fa";
import { services, CompanyValues, OrganizationalIdentity, CompanyInfo } from "../data/dummy";
import { IoLogoLinkedin, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import company_image from "../images/concept-victory.jpg";
import emailjs from "@emailjs/browser";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = () => {

    const [ service, setService ] = useState({});
    const [ topic, setTopic ] = useState("Marketing");
    const selectedMethodRef = useRef();
    const [ dialogOpen, setDialogOpen ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ popupMessage, setPopupMessage ] = useState("");
    const [ isPopupOpen, setPopupOpen ] = useState(false);
    const [ popupType, setPopupType ] = useState("");
    const [ popupTimer, setPopupTimer ] = useState(5000);

    const message = useRef();
    const name = useRef();
    const email = useRef();
    const role = useRef();
    const company = useRef();
    const topicRef = useRef();

    const form = useRef();

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in-section");

        const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // optional: stop observing after fade-in
            }
            });
        },
        { threshold: 0.1 } // 10% of the element visible triggers fade-in
        );

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const sendEmail = () => {
        emailjs
        .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_KEY,
            process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
            (result) => {
                showMessage("Mensagem enviada com sucesso!", "success", 0);
                setLoading(false);
            },
            (error) => {
                console.log(error);
                showMessage("Ocorreu um erro ao enviar a mensagem.", "error", 0);
                setLoading(false);
            }
        );
    };

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

    const number = "9807567";

    const SendMessage = (e) => {
        e.preventDefault();

        setLoading(true);
        
        try {

            if(selectedMethodRef.current) {
                if(selectedMethodRef.current === "whatsapp") {
                    const link = generateWhatsAppLink(number, generateMessageTemplate());
                    window.open(link, "_blank");
                    setLoading(false);
                }
                else {
                    sendEmail();
                }
            }
            else {
                showMessage("Selecione um método de envio!", "error", 0);    
                setLoading(false);
            }

        } catch(err) {
            showMessage("Erro inesperado.", "error", 0);
            setLoading(false);
        }

    }

    function generateMessageTemplate() {
        let templateMessage = "Informações de Contato:";
        templateMessage += "\n Nome: " + name.current;
        templateMessage += "\n Email: " + email.current;
        templateMessage += "\n Empresa: " + company.current;
        templateMessage += "\n Cargo: " + role.current;

        templateMessage += "\n \n Assunto: " + topicRef.current;
        templateMessage += "\n Mensagem: ";
        templateMessage += "\n " + message.current;
        return templateMessage;
    }

    function generateWhatsAppLink(phoneNumber, message) {
        const baseURL = "https://wa.me/";
        const encodedMessage = encodeURIComponent(message);
        return `${baseURL}${phoneNumber}?text=${encodedMessage}`;
    }

    const ChangeMethod = (method) => {
        selectedMethodRef.current = method;
    }

    const showMessage = (message, type, timer) => {
        setPopupMessage(message);
        setPopupType(type);
        setPopupOpen(true);
    }

    return(
        <>
          <Header/>
          <ServicePopup isOpen={dialogOpen} onClose={() => setDialogOpen(false)} onSelect={selectService} service={service}/>
          <MessagePopup message={popupMessage} type={popupType} timer={popupTimer} confirmButtonText="OK" isOpen={isPopupOpen} closeFunc={() => setPopupOpen(false)}/>
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

          <section id="service" className="our-services section fade-in-section">
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
            <div className="about-us-title-container fade-in-section">
                <span className="about-us-title">Sobre a Up Consultinvest</span>
            </div>
            <div className="info-container fade-in-section">
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
            <div className="info-container-2 fade-in-section">
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
                                        <div key={index} className="company-values-card fade-in-section">
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
                                        <div key={index} className="company-values-card fade-in-section">
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

          <section id="contact" className="contact-us section fade-in-section">
            <h1 className="section-title">Queremos ouvir o que sua empresa precisa.</h1>
            <p className="section-caption">Estamos disponíveis para uma conversa estratégica.</p>

            <div className="contact-container">
                <div className="company-info">
                    <InfoCard value={{
                        title: "Email",
                        description: CompanyInfo.email || "contato@upconsultinvest.com",
                        icon: 2,
                    }}/>
                    <InfoCard value={{
                        title: "Telefone",
                        description: CompanyInfo.contact,
                        icon: 3,
                    }}/>
                    <div className="social-container">
                        <div className="icon_container" onClick={() => window.open(CompanyInfo.facebookLink, "_blank")}>
                            <FaFacebook className="icon"/>
                            <div className="selector"></div>
                        </div>
                        <div className="icon_container" onClick={() => window.open(CompanyInfo.instagramLink, "_blank")}>
                            <RiInstagramFill className="icon"/>
                            <div className="selector"></div>
                        </div>
                        <div className="icon_container" onClick={() => window.open(CompanyInfo.linkedInLink, "_blank")}>
                            <IoLogoLinkedin className="icon"/>
                            <div className="selector"></div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h1>Solicite uma Proposta</h1>
                    <p>Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.</p>
                    <form ref={form} method="POST" onSubmit={SendMessage}>
                        <div className="input_columns">
                            <div className="input_container">
                                <label htmlFor="name">Nome Completo *</label>
                                <input onChange={(e) => name.current = e.target.value} type="text" placeholder="Seu nome completo" id="name" name="name" required/>
                            </div>
                            <div className="input_container">
                                <label htmlFor="email">Email *</label>
                                <input onChange={(e) => email.current = e.target.value} type="email" placeholder="seu@email.com" id="email" name="email"  required/>
                            </div>
                        </div>
                        <div className="input_columns">
                            <div className="input_container">
                                <label htmlFor="company">Empresa *</label>
                                <input onChange={(e) => company.current = e.target.value} type="text" placeholder="Nome da sua empresa" name="company" id="company"  required/>
                            </div>
                            <div className="input_container">
                                <label htmlFor="role">Cargo *</label>
                                <input onChange={(e) => role.current = e.target.value} type="text" placeholder="Gerente" name="role" id="role"  required/>
                            </div>
                            <div className="input_container">
                                <label htmlFor="service">Serviço desejado *</label>
                                <select name="service" id="service" value={topic} onChange={(e)=> {
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
                            <textarea onChange={(e) => message.current = e.target.value} id="message" name="message" placeholder="Conte-nos sobre o seu projeto e como podemos ajudar..." required></textarea>
                        </div>
                        <div className="input_container">
                            <label htmlFor="send_option">Enviar por:</label>
                            <select name="send_option" defaultValue="null" id="send_option" onChange={(e) => ChangeMethod(e.target.value)} required>
                                <option value="null" disabled unselectable>Escolha o método de envio</option>
                                <option value="email">Email</option>
                                <option value="whatsapp">WhatsApp</option>
                            </select>
                        </div>
                        <button style={{cursor: 'pointer'}} className="form-button" type="submit">
                            {
                                !loading
                                ?
                                <>
                                    Enviar Mensagem <FiSend/>
                                </>
                                :
                                <>
                                    <AiOutlineLoading3Quarters className="icon loading"/>
                                </>
                            
                            }
                        </button>
                    </form>
                </div>
            </div>
          </section>

          <Footer/>
        </>
    )
}

export default Home;
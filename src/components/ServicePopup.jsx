import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import "../css/ServiceDetailPopup.css"
import { FiUsers } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ServicePopup = ({isOpen, service, onClose, onSelect}) => {

    const MapIcon = {
        0: <HiMiniArrowTrendingUp className="icon"/>,
        1: <FiUsers className="icon"/>,
        2: <MdOutlineSupportAgent className="icon"/>,
        3: <GiTakeMyMoney className="icon"/>,
        4: <RiInboxArchiveFill className="icon"/>
    }

    return(
        <>
            {
                isOpen &&
                <div className="ServiceDetail">
                    <div className="Card">
                        <div className="row icon-container">
                            {MapIcon[service.icon]}
                        </div>
                        <div className="row info-container">
                            <h1>{service.title}</h1>
                            <p>{service.description}</p>
                            <ul>
                                {
                                    service.features.map((feature, index) => {
                                        return(
                                            <li key={index}><IoMdCheckmarkCircleOutline className="icon"/> {feature}</li>
                                        )
                                    })
                                }
                            </ul>

                            <div className="service-button">
                                <button onClick={() => {
                                    onSelect(service.title);
                                    onClose();
                                }}>Solicite Proposta <FaArrowRight className="icon"/></button>
                            </div>
                        </div>
                        <div className="close-btn" onClick={onClose}>
                            <IoClose className="icon"/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default ServicePopup;
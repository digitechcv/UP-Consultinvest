import "../css/servicecard.css"
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiInboxArchiveFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";

const ServiceCard = ({service, index}) =>
{
    const MapIcon = {
        0: <HiMiniArrowTrendingUp className="icon"/>,
        1: <FiUsers className="icon"/>,
        2: <MdOutlineSupportAgent className="icon"/>,
        3: <GiTakeMyMoney className="icon"/>,
        4: <RiInboxArchiveFill className="icon"/>
    }

    return(
        <div className="ServiceCard">
            <div className="service-icon">
                { MapIcon[service.icon] }
            </div>
            <p>{service.title}</p>
            <span>{service.description}</span>
            <ul>
                {
                    service.features.map((feature, index) => {
                        return(
                            <li key={index}>{feature}</li>
                        )
                    })
                }
            </ul>
            <div className="service-button">
                <button>Solicite Proposta <FaArrowRight className="icon"/></button>
            </div>
        </div>
    )
}

export default ServiceCard;
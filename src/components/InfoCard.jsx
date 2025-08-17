import "../css/InfoCard.css";
import { BiSolidMedal } from "react-icons/bi";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

const InfoCard = ({value}) => {

    const MapIcon = {
        0: <TbTargetArrow className="icon"/>,
        1: <BiSolidMedal className="icon"/>,
        2: <MdEmail className="icon"/>,
        3: <FaPhoneAlt className="icon"/>,
        4: <FaMapMarkerAlt className="icon"/>,
    }

    return (
        <div className="InfoCard">
            <div className="icon_container">
                {MapIcon[value.icon]}
            </div>
            <div className="info_container">
                <h2>{value.title}</h2>
                <p>{value.description}</p>
            </div>
        </div>
    )
}

export default InfoCard;
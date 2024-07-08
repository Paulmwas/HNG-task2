import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCcVisa, faCcMastercard} from "@fortawesome/free-solid-svg-icons";


const Botttom = () => {
  return (
    <div className="copyright">
        <p>Copyright <span>&#169;</span> 2024 All Rights Reserved Doclan Co.</p>
        <div className="imagesc">
            https://fontawesome.com/icons/cc-visa?f=brands&s=solid
            <FontAwesomeIcon icon={faCcVisa} />
        </div>
      
    </div>
  )
}

export default Botttom

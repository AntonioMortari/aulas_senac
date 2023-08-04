import {FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa'

import './footer.css'

const Footer = () =>{
    return(
        <footer>
            <div className='box-icons'>
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
            </div>

            <span>@Costs 2023</span>
        </footer>
    )
}

export default Footer
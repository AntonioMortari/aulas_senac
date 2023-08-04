import {Link} from 'react-router-dom'

import './linkbutton.css'

const LinkButton = ({txt, to}) =>{
    return(
        <Link className="link-button" to={to}>
            {txt}
        </Link>
    )
}

export default LinkButton
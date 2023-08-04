import './conteiner.modules.css'
const Conteiner = (props) =>{
    return(
        <div className={`conteiner ${props.customClass}`}>
            {props.children}
        </div>
    )
}

export default Conteiner
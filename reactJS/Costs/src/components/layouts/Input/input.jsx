import './input.css'

const Input = ({name, txt,type,placeholder,value}) =>{
    return(
        <label htmlFor={name}>
            {txt}

            <input type={type} name={name} id={name} placeholder={placeholder} defaultValue={value} />
        </label>
    )
}

export default Input
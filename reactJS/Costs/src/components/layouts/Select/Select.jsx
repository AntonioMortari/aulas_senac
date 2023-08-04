import React, {useState, useEffect} from 'react'

import './select.css'


const Select = ({name, txt}) =>{
    const [categories, setCategories] = useState([]);


    useEffect(() =>{
        fetch('http://localhost:5000/categories', {
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) =>{
                setCategories(data)
                console.log(data)
            })
            
            .catch(err => console.log(err))
    },[])

    
    return(
        <label htmlFor={name} className='conteiner-select'>

            {txt}
            
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
                {categories.map(option =>{
                    return(
                        <option value={option.id} key={option.id}>{option.name}</option>
                    )
                })}
                
            </select>
        </label>
    )
}

export default Select
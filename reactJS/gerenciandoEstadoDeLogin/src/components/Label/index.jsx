import styled from 'styled-components'

const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 2px;

    width: 70%;

    font-weight: bold;
    color: #262626;

    margin-top: 16px;

    >input{
        padding: 10px;
        border: 1px solid #26262652;
        outline: 1px solid ${({theme}) => theme.COLORS.red};
        border-radius: 5px;

        font-size: 1rem;

    }
`


function ComponentLabel({content, placeholder,type, id}) {
    return ( 
        <Label htmlFor={id}>
            {content}
            <input required type={type} name={id} id={id} placeholder={placeholder}/>
        </Label>
     );
}

export default ComponentLabel;
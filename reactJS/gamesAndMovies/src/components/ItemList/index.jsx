
export default function ItemList(props) {
    return (
        <li>
            <a
                target="_blank"
                href= {props.url}>
                <img src={props.src} alt={'Imagem do '+ props.name} />
            </a>
        </li>
    )
}
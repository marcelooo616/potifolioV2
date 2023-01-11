import { Container, Item } from './styles'; 
import { NavLink } from 'react-router-dom';
export default function MenuMobile({menuIsVisible, setMenuIsVisible}){
    const menu = [
        {nome:"Projetos"},
        {nome:"Contato"},
        {nome:"Sobre"}
    ]

    return(
        <Container isVisible={menuIsVisible}>
            <nav>
                {menu.map((item) => {
                    return(
                        <NavLink to={`/${item.nome}`} className="link" key={item.nome}>
                            <Item className="item-hover" variant="primary">{item.nome}</Item>
                        </NavLink>
                    )
                })}
            </nav>
        </Container>
    )
}
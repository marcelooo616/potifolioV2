import { useState } from "react";
import { NavLink } from "react-router-dom"
import MenuMobile from "../../MenuMobile";
import { IoClose } from "react-icons/io5";
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { Item, Logo, Menu } from "./styles";
import { Link } from "@mui/material";
export default function Navbar(){
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    const menu = [
        {nome:"Projetos"},
        {nome:"Contato"},
        {nome:"Sobre"}
    ]
    return (
        <nav>
            <Logo  >
                <NavLink to="/" className="item-hover">
                    <img  src="https://i.imgur.com/jvXVAIx.png" className="logo"/>
                </NavLink>
                
            </Logo>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
             <Menu variant="menu-mobile">
                {menuIsVisible 
                ? <IoClose onClick={() => setMenuIsVisible(false) } size={30}/>
                : <MenuIcon onClick={() => setMenuIsVisible(true) }/>}
                
            </Menu>
            
            <Menu variant="manu-desktop">
                {menu.map((item) => {
                    return(
                        <NavLink to={`/${item.nome}`}  className="link" key={item.nome}>
                            <Item variant="primary" className="item-hover" >{item.nome}</Item>
                        </NavLink>
                        
                    )
                })}
            </Menu>
        </nav>
    
    )
};
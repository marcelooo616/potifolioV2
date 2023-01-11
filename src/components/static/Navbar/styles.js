
import styled, { css } from "styled-components";



export const Item = styled.span`
    color: var(--color-complement-two);
    font-family: 'Bebas Neue', cursive;
    text-decoration: none;
    font-size: 25px;

    
    

    ${({variant}) => variant !== 'primary' && css`
            color: var(--color-secundary);
    ` }
`



export const Menu = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 10px;
    width: 50%;

    @media (max-width: 700px){
        display: none;
        
    }

                ${({variant}) => variant !== 'manu-desktop' && css`
                    display: none;
                    @media (max-width: 690px){
                        display: flex;
                        justify-content: flex-end;
                        
                    }
                ` }


`
export const Logo = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    

`
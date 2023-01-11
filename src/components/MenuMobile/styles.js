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

export const Container = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    border-radius: 00px 0px 10px 10px;
    width: 100%;
    height: 300px;
    top:90px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;

    background: rgb(1,4,64);
    background: linear-gradient(180deg, rgba(1,4,64,1) 34%, rgba(3,7,89,1) 100%);
    opacity: 0;
    pointer-events: none;
    transition: 1s ease-in-out

    >svg{
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;

    ` }




`;
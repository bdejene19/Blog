import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
    z-index: 50;
    display: flex;
    padding-top: 1rem;
    padding-bottom: 0.5eem;
    padding-left: 0.5rem;
    width: 100vw;   
    background-color: snow;
    a {
        color: black;
        background: transparent;
        border: none;
        width: 6vw;
        align-items: center;
        align-self: center;
        height: 5vh;
        padding-right: 3em;
        padding-left: 3em;
        font-size: 20px;
        font-weight: 900;
        text-decoration: none;
        width: max-content;
     
        cursor: pointer;
    }

    img {
        z-index: 2;
        width: 3vw;
        padding: 0;
        align-self: flex-start;
        justify-self: center;
    }
`;


export default function Nav() {
    return (
        <NavBar>
            <img src="testLogo.png" alt=""></img>

            <a href='#aboutSection'>About</a>
            <a>Login</a>
            <a>Register</a>
        </NavBar>
    )
}

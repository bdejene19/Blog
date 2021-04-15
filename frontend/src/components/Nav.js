import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
 
    display: flex;
    button {
        color: black;
        background: transparent;
        outline: none;
        border: none;
        width: 6vw;
        height: 5vh;
        width: max-content;
     
        cursor: pointer;
        font-size: 16px;
    }
`;


export default function Nav() {
    return (
        <NavBar>
            <button>About Us</button>
            <button>Login</button>
            <button>Register</button>
        </NavBar>
    )
}

import React from 'react';
import styled from 'styled-components';
import HomeBackground from '../components/HomeBackground';
import LoginContent from '../components/LoginContent';
import Nav from '../components/Nav';


const HomeWrapper = styled.section`

`;

const HomeBg = styled.article`
    background-color: whitesmoke;
    width: 100vw;
    background: url("https://www.101computing.net/wp/wp-content/uploads/artillery-game-background.png");
    background-size: cover;
    height: 100vh;
    position: relative;

    & h1 { 
        position: absolute;
        color: #fff;
        font-family:arial;
        /* color: transparent; */
        mix-blend-mode: multiply;
    }
    span { 
       
    }

`;


export const Home = () => {
    return (
        <HomeWrapper>
                {/* <Nav></Nav> */}
                <HomeBackground></HomeBackground>
        </HomeWrapper>
    )
}
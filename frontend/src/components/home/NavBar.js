import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const NavClient = styled.nav`
    width: 20vw;
    height: 100vh;
    overflow: hidden;
    content: '';
    display: flex;
    flex-direction: column;
    background-image: url('/navbackground.png');
    background-size: cover;
    background-color: snow;
    align-items: left;
    justify-content: center;

    div {
        transform: translateY(5em);
    }
    .navButtonContainer {
        display: grid;
        cursor: pointer;
        align-items: center;
        justify-items: center;
        margin-left: 1em;
        position: relative;
        /* border: solid black 10px; */
        width: 4vw;
        height: 6vh;
        border-radius: 50%;
        margin-top: 0.5em;
        margin-bottom: 2.5em;
        
        

        background: #3BBE38;
        box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.96), 10px 10px 20px #084806;

    
        .icon {
            color: orangered;
            justify-items: center;
            text-align: center;
        }
    } 

 


`;

export default function NavBar() {
    return (
        <NavClient>
            
            <div className='navButtonContainer'>
                <HomeIcon className='icon'></HomeIcon>
            </div>            
            <div className='navButtonContainer'>
                <PersonIcon className='icon'></PersonIcon>
            </div>
            <div className='navButtonContainer'></div>
            <div className='navButtonContainer'>
                <ExitToAppIcon className='icon'></ExitToAppIcon>
            </div>

        </NavClient>
    )
}
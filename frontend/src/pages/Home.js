import React from 'react';
import NavBar from '../components/home/NavBar';
import styled from 'styled-components';
import { CreatePost } from '../components/home/CreatePost';
import Greeting from '../components/home/Greeting';
import RecommendedPosts from '../components/home/RecommendedPosts';

const HomeLayout = styled.section`
    width: 100%; 
    display: grid;
    
    grid-template-columns: auto 2fr 1fr;    
    grid-template-rows: auto;

    .thirdCol {
        
       
    }

`;
export default function Home() {
    return (
        <HomeLayout>
            <NavBar></NavBar>
            <div style={{border: 'solid black 3px', paddingLeft: '3em'}}>
                <Greeting></Greeting>
                <CreatePost></CreatePost>
            </div>
            <div className='thirdCol'>

                <RecommendedPosts></RecommendedPosts>
            </div>

        </HomeLayout>
    )
}


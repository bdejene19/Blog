import React, {useEffect, useState} from 'react';

import styled from 'styled-components';
import Tilt from 'react-tilt';


export default function RecommendedPosts() {
    const [APIdata, setAPIData] = useState([]);

    const getUsers = async () => {
        let response = await (await fetch("https://randomuser.me/api/?results=3")).json()
        let results = response.results;
        setAPIData(results);

        for (var count = 0; count < pData.length; count++) {
            console.log(pData[count].innerHTML.length);
            if (pData[count].innerHTML.length >= 120) {
                let cutOff = pData[count].innerHTML;
                cutOff = cutOff.slice(0, 140).concat('...');
                console.log(cutOff);
                pData[count].innerText = cutOff ;
            } else {
                console.log('what happened?')
            }
        }

    }
    let pData = document.getElementsByClassName('card-content');  

    useEffect(() => {
      
        getUsers();    
        
       
        
    }, [pData])





    
    
    return (
        <RecommendWrap>

        <Tilt options={{max:  25, reset: true, pespective: 1000, scale: 1.05}} className='tiltIcon'>
            <RecommendedContainer>
                {/* <img src='/secondaryBg.jpg' alt='react-logo'></img> */}
                {APIdata[0] !== undefined ? 
                
                <div>
                    <div className='title'>
                    <img src={APIdata[0].picture.medium} alt='profile picture'></img>
                    <h1>{APIdata[0].name.first} </h1>
                    <p>{APIdata[0].location.city}, {APIdata[0].location.country}</p>
                </div>

                <p className='card-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div> : 'dejene'}

                <SeeMoreBtn>See More</SeeMoreBtn>            
            </RecommendedContainer>
        </Tilt>


        <Tilt options={{max:  25, reset: true, pespective: 1000, scale: 1.05}} className='tiltIcon'>

        <RecommendedContainer>
            {/* <img src='/secondaryBg.jpg' alt='react-logo'></img> */}
            {APIdata[0] !== undefined ? 
            
            <div>
                <div className='title'>
                <img src={APIdata[1].picture.medium} alt='profile picture'></img>
                <h1>{APIdata[1].name.first} </h1>
                <p>{APIdata[1].location.city}, {APIdata[1].location.country}</p>
            </div>

            <p className='card-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div> : 'dejene'}

            <SeeMoreBtn>See More</SeeMoreBtn>            
        </RecommendedContainer>
        
        </Tilt>
        <Tilt options={{max:  25, reset: true, pespective: 1000, scale: 1.05}} className='tiltIcon'>


        <RecommendedContainer>
            {/* <img src='/secondaryBg.jpg' alt='react-logo'></img> */}
            {APIdata[0] !== undefined ? 
            
            <div>
                <div className='title'>
                <img src={APIdata[2].picture.medium} alt='profile picture'></img>
                <h1>{APIdata[2].name.first} </h1>
                <p>{APIdata[2].location.city}, {APIdata[2].location.country}</p>
            </div>

            <p className='card-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div> : 'dejene'}

            <SeeMoreBtn>See More</SeeMoreBtn>            
        </RecommendedContainer>

        </Tilt>


       

        </RecommendWrap>
    )
}

const RecommendWrap = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 3em;
    justify-items: center;
    padding-top: 1em;

    .tiltIcon {
        display: grid;
        justify-items: center;

        &:focus {
            opacity: 1;
        }
    }
`;

const RecommendedContainer = styled.div`

    width: 85%;
    height: 25vh;;
    border: solid lightgrey 3px;
    border-radius: 3%;
    box-shadow: 5px 5px 5px 0  blanchedalmond;
    background-image: url('/secondaryBg.jpg');
    opacity: 0.7;
    background-size: cover;
    display: grid;
    grid-template-columns: 1fr;
    padding: 0.5em;
    &:hover {
        opacity: 1;

        p {
            font-weight: 500;


        }
    }
    
    h1 {
        margin: 0;  
        height: fit-content;
        font-size:  24px;
    }

   
   .title {
       display: grid;
       grid-template-columns: auto 1fr 1fr;
       grid-template-rows: auto;
       column-gap: 0.5em;

       img {
           width: 3vw;
           height: 5vh;
           border-radius: 50%;
       }

       p {
           font-size: 14px;
           width: fit-content;
           justify-items: flex-end  ;
           text-align: right;
       }
   }

   .card-content {
       height: 20%;
       
       margin: 0;
   }

    img {
        grid-column: span;
        width: 100%;
        height: 25vh;
        background-size: cover;
        background-position: center;
        
    }

    button {
        align-self: flex-end; 
        justify-self: center;   
    }
`;


const SeeMoreBtn = styled.button`
    width: 90%;
    height: 5vh;
    left: 5%;
    bottom: 5%;
    border-radius: 30px 30px 30px 30px;
    border: none;
    font-size: 16px;
    background: linear-gradient(45deg, magenta, snow 100%);
    &:hover, :focus{
        background-color: limegreen;
        color: slateblue;
        font-weight: 900;
        outline: none;
        border: orangered 3px solid;
    }
`;
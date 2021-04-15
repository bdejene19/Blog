import React, {useEffect} from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const ImageWrapper = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

    .big-title{
        align-self: right;
        left: 55%;
        top: 50%;
        position: absolute;
        z-index: 30;
        line-height: 4rem;
        font-size: 3rem;
        padding: 1rem;
        border-radius: 3%;
        box-shadow: 0 0 30px; 
        width: 30%;
        border: solid #fff 10px;
        font-weight: 600;
        color: #fff;
    }

    .person{
        position: absolute;
        width: 650px;
        bottom: 0px;
        left: -70px;
        z-index: 20;
    }

    .mountain1{
        position: absolute;
        bottom: -100px;
        width: 1500px;
        right: 0;
        z-index: 19;
    }
    .mountain2{
        position: absolute;
        width: 1100px;
        bottom: -100px;
        right: -499px;
        left: 0;
        z-index: 18;
    }
    .mountain3{
        position: absolute;
        width: 900px;
        bottom: 150px;
        right: 0;
        z-index: 17;
    }

    .sky{
        position: absolute;
        width: 2100px;
        bottom: 150px;
        right: 0;
    }

   

    .aboutContent {
        h1 {
            color: blue;
            font-size: 50px;
        }
        img {
            width: 20vw;
            border: solid green 10px;
        }
    }
    
`;

const Shadow = styled.section`
    bottom: 100%;
    position: absolute;
    height: 300px;
    width: 100%;
    left: 0;
    z-index: 20;
    background: linear-gradient(to top, #151515, transparent);
    display: grid;
    grid-column: 1fr 1fr;
    align-items: center;

    img {
        width: 20vw;

    }
`;

const AboutUs = styled.div`
    max-width: 100rem;
    height: 70vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    
    .aboutUsContent{
        height: 100%;
        width: 100%;
        padding-left: 3em;
        background-color: black;
        color: #fff;
        align-content: flex-end;

        p {
            width: 70%;
        }
    }

    .imgContainer{
        grid-column: 2;
        transform: translateY(50px);
        justify-self: center;



        img {
            width: 20vw;
            height: 30vh;

        }
    }

    .title{
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        padding-bottom: .5rem;
        position: relative;
    }

`;
export default function HomeBackground() {
   

    useEffect(() => {
    const translate = document.querySelectorAll(".translate");
    const big_title = document.querySelector(".big-title");
    const header = document.querySelector("#header");
    const shadow = document.querySelector(".shadowAbout");
    const section = document.querySelector("section");
    const content = document.querySelector(".aboutUsContent");

    const image_container = document.querySelector(".imgContainer");
    const opacity = document.querySelectorAll(".opacity");
    const border = document.querySelector(".border");



    let header_height = header.offsetHeight;
    let section_height = section.offsetHeight;

    window.addEventListener('scroll', () => {
            let scroll = window.pageYOffset;
            let sectionY = section.getBoundingClientRect();
            
            translate.forEach(element => {
                let speed = element.dataset.speed;
                element.style.transform = `translateY(${scroll * speed}px)`;
            });
        
        
        
            big_title.style.opacity = - scroll / (header_height / 2) + 1;
            shadow.style.height = `${scroll * 0.5 + 100}px`;

            opacity.forEach(element => {
                element.style.opacity = scroll / (sectionY.top + section_height);
            })
        
            big_title.style.opacity = - scroll / (header_height / 2) + 1;
            shadow.style.height = `${scroll * 0.5 + 300}px`;
        
            content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
            image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;
        
            border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
            
        
        
    })
        
    })
    

    return (
        <div>
            <ImageWrapper id='header'>
                <h1 className='big-title'>Tell the world about your journey</h1>

                <img src="img/person.png" alt="" className='person translate' data-speed='0.4'></img>
                <div style={{position: 'absolute', zIndex: 1}}>
                    <Nav></Nav>
                </div>
                <img src="img/mountain1.png" alt="" className='mountain1 translate' data-speed='0.2'></img>
                <img src="img/mountain2.png" alt="" className='mountain2 translate' data-speed='0.2'></img>
                <img src="img/mountain3.png" alt="" className='mountain3 translate' data-speed='0.2'></img>
                <img src="img/sky.png" alt="" className='sky'></img>
            </ImageWrapper>

            <Shadow className='shadowAbout'></Shadow>
            <AboutUs>
                <div class="aboutUsContent opacity">
                    <h1 class="title">
                        About Us
                        <div class="border"></div>
                    </h1>
                    <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis quos expedita ipsa, a quidem inventore voluptates debitis accusamus tenetur qui et voluptas dicta, culpa earum, doloribus odio consectetur consequuntur soluta quasi nobis! Deserunt voluptatum reiciendis iure expedita sequi quisquam laboriosam temporibus exercitationem.</p>
                </div>

                <div class="imgContainer opacity">
                    <img src="img/sky.png" alt="" className='sky'></img>

                </div>

            </AboutUs>


                   



           
           
            

        </div>

    )
}

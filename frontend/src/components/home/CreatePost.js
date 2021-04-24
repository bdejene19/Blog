import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
    



const PostWrapper = styled.div`
    height: 15vh;
    width: 100%;
    
    textarea {
        width: 80%; 
        height: 80%;
    }

    

    div {
        display: flex;
        margin-top: 1em;
        width: 80%;
        align-self: center;
        justify-content: center;
        column-gap: 1em;
    }
`;


const PostButton = styled.button`
    width: 10vw;
    height: 5vh;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.btnColor || 'green'};    
    display: flex;
    row-gap: 2em;
    cursor: pointer;
    outline: none;

    &:focus {
    }
`;

export const CreatePost = () => {

    return (
        <PostWrapper>
            <textarea placeholder='What would you like to write about...'></textarea>
            <div>
                <PostButton type='button' btnColor='snow'>Cancel</PostButton>
                <PostButton type='button'>Post!</PostButton>

            </div>
        </PostWrapper>
    )
}
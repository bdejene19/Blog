import React from 'react';
import styled from 'styled-components';

export const LoginForm = styled.form`
    width: 100%;

`;

export const UserEntry = styled.div`
    padding-top: 0.5em;
    display: flex;
    flex-direction: column;
    input { 
        margin-bottom: 1em;
        height: 4vh;
        font-size: 14px;
        padding-left: 0.5em;
    }
    
`

export default function BasicInfoForm() {
    return (
        <div>
            <LoginForm id='form2'>
                <UserEntry>
                    <label for='firstName'>First Name:</label>

                    <input type='text' name='firstName' id='firstName'></input>
                </UserEntry>

                <UserEntry>
                <label for='lastName'>Last Name:</label>

                    <input type='text' name='lastName' id='lastName'></input>
                </UserEntry>

            </LoginForm>
        </div>
    )
}

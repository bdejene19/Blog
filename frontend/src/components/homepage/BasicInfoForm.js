import React, {useState} from 'react';
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
        border-radius: 3px;
    }

    input:focus {
        box-shadow: 0 5px slateblue;
    }
    
`

export default function BasicInfoForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return (
        <div>
            <LoginForm id='form1'>
                <UserEntry>
                    <label>First Name:</label>

                    <input type='text' name='firstName' id='firstName' value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                </UserEntry>

                <UserEntry>
                <label>Last Name:</label>

                    <input type='text' name='lastName' id='lastName' value={lastName} onChange={e => setLastName(e.target.value)}></input>
                </UserEntry>

            </LoginForm>
        </div>
    )
}

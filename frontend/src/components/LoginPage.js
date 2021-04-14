import React from 'react';
import styled from 'styled-components';

const LoginForm = styled.form`
    width: 100%;
    padding: 1em;

`;

const UserEntry = styled.div`
    padding-top: 0.5em;
    padding-bottom: 0em;
    
`

export default function LoginPage() {
    return (
        <div>
            <LoginForm action={`/getUser/:[id]`} method='POST'>
                <UserEntry>
                    <input type='text' name='user' id='user' placeholder='Username'></input>
                    <label for='user'></label>
                </UserEntry>

                <UserEntry>
                    <input type='text' name='pswd' id='pswd' placeholder='Password'></input>
                    <label for='pswd'></label>
                </UserEntry>

                <button type='submit'>Login</button>
                <button type='button'>Create account!</button>
            </LoginForm>
            <div>
                why can't i access frontend folder on git
            </div>
        </div>
    )
}
import React from 'react';
import { UserEntry, LoginForm } from './BasicInfoForm';

export default function UserPassForm() {
    return (
        <div>
            <LoginForm method='POST' action='/test' id='form2'>
                <UserEntry>
                    <label for='username'>Username:</label>
                    <input type='text' id='username' name='username'></input>
                </UserEntry>

                <UserEntry>
                    <label for='pswd'>Password:</label>
                    <input type='text' id='pswd' name='pswd'></input>

                    <label for='pswdRepeat'>Repeat Password:</label>
                    <input type='text' id='pswd-repeat' name='pswd-repeat'></input>
                </UserEntry>
            </LoginForm>
        </div>
    )
}

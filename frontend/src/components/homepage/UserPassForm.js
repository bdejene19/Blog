import React, {useState} from 'react';
import { UserEntry, LoginForm } from './BasicInfoForm';

export default function UserPassForm() {

    const [username, setUsername] = useState("");
    const [pswd, setPswd] = useState("");
    const [repeatPass, setRepeatPass] = useState("");

    return (
        <div>
            <LoginForm method='POST' action='/test' id='form2'>
                <UserEntry>
                    <label for='username'>Username:</label>
                    <input type='text' id='username' name='username' value={username} onChange={e => setUsername(e.target.value)}></input>
                </UserEntry>

                <UserEntry>
                    <label for='pswd'>Password:</label>
                    <input type='text' id='pswd' name='pswd' value={pswd} onChange={e => setPswd(e.target.value)}></input>

                    <label for='pswdRepeat'>Repeat Password:</label>
                    <input type='text' id='pswd-repeat' name='pswd-repeat' value={repeatPass} onChange={e => setRepeatPass(e.target.value)}></input>
                </UserEntry>
            </LoginForm>
        </div>
    )
}

import React, { useEffect, useState } from 'react'

export default function Greeting() {

    const [greetingName, setGreetingName] = useState('');

    useEffect(() => {
        let name = ""
        const nameGreeting = async () => {
            name = await (await fetch('/name')).json();
            setGreetingName(name.firstName);
        }
        nameGreeting();
        console.log('this is my name greeting: ', greetingName);

    })
    return (
        <div>
            <h1>Your feed</h1>  
            <h2>What will you tell the world today  {greetingName}?</h2>
            
        </div>
    )
}

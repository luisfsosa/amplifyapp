import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [agentName, setAgentName] = useState('');
    const [messsage, setMesssage] = useState('');
    const [backGroundColor, setBackGroundColor] = useState('App-header');

    useEffect(() => {
        const socket =  new WebSocket('wss://lp0vui8n6f.execute-api.us-east-1.amazonaws.com/test');
        socket.onmessage = evt => {
            // add the new message to state

            let messageObject = JSON.parse(evt.data);

            console.log(messageObject);
            console.log(messageObject.agentName);

            setBackGroundColor('App-header2');
            setAgentName(messageObject.agentName);
            setMesssage(messageObject.messsage);



            setTimeout(() => {
                setBackGroundColor('App-header');
                setAgentName('');
                setMesssage('');
            }, 5000);
        };


    }, []);

    return (
        <div className="App">
            <header className={backGroundColor}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello from LIVEVOX</h1>
                <h1>{agentName}</h1>
                <h3>{messsage}</h3>
            </header>
        </div>
    );
}

export default App;

import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [response, setResponse] = useState('');
    const [backGroundColor, setBackGroundColor] = useState('App-header');

    useEffect(() => {
        const socket =  new WebSocket('wss://lp0vui8n6f.execute-api.us-east-1.amazonaws.com/test');
        socket.onmessage = evt => {
            // add the new message to state
            setBackGroundColor('App-header2');
            setResponse(evt.data);

            setTimeout(() => {
                setBackGroundColor('App-header');
                setResponse("");
            }, 5000);
        };


    }, []);

    return (
        <div className="App">
            <header className={backGroundColor}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello from LIVEVOX</h1>
                <h1>{response}</h1>
            </header>
        </div>
    );
}

export default App;

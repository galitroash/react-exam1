import React from 'react';
import { useState} from 'react';
import './mouseText.css';

function MouseText(){
    const [text, setText] = useState("");
    function updateText() {
        setText("You are inside my DIV");
    }
    function resetText(){
        setText("");
    }
    return (<div   onMouseOver={updateText} onMouseOut={resetText}>
                <div className="mainDiv"><h1>MOUSEHOOVER ME!</h1></div>
                <p>{text}</p>
    </div>);
}

export default MouseText;
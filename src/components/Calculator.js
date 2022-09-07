import React from 'react';
import Screen from './Screen';
import ButtonsContainer from './ButtonsContainer';

export default function Calculator() {
    let [show, setShow] = React.useState("");
    let [res, setRes] = React.useState("");
    let calc = (shown,temp) => {
        let value;
        try {
            value=eval(shown).toString();
            setRes(value);
        }catch(e){
            if(temp === "="){
                window.alert("Invalid expression!");
            }
        }
    }
    let handleClick = (val) => {
        if (val === "del") {
            setShow(shown => shown.slice(0, -1));
            calc(show.slice(0, -1));
        } else if (val === "=") {
            calc(show,"=");
        } else if (val === "C") {
            setShow("");
            setRes("")
        } else {
            setShow(shown => shown + val);
            calc(show + val);
        }
    }
    return (
        <div className='Calc'>
            <Screen exp={show} res={res} />
            <ButtonsContainer func={handleClick} />
        </div>
    )
}
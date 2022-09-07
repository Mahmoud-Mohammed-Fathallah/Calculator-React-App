
import { memo } from 'react';
import FuncButton from './FuncButton';
import NumberButton from './NumberButton';
function ButtonsContainer(props){
    let butt = ["C","(",")","del","1","2","3","/","4","5","6","*","7","8","9","-","0",".","=","+"];
    let butArr = butt.map((but,index) =>{
        return !isNaN(but) || but === "." ? <NumberButton key={index} Value={but} func={()=>props.func(but)}/> : <FuncButton key={index} Value={but} func={()=>props.func(but)}/>;
    })
    return (
        <div className="buttons-container">
            {butArr}
        </div>
    )
}
export default memo(ButtonsContainer);
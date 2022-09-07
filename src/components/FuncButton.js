import {TbLetterC,TbDivide,TbLetterX} from 'react-icons/tb'
import {RiDeleteBack2Line} from 'react-icons/ri'
import { memo } from 'react';
function FuncButton(props){
    let toDisp=props.Value;
    if(props.Value === "c"){
        toDisp = <TbLetterC/>
    }
    else if(props.Value === "del"){
        toDisp = <RiDeleteBack2Line/>
    }
    else if(props.Value === "/"){
        toDisp = <TbDivide/>
    }
    else if(props.Value === "*"){
        toDisp = <TbLetterX/>
    }
    return (
        <button className="func-button" onClick={props.func} id={props.Value}>
            {toDisp}
        </button>
    )
}
export default memo(FuncButton)
import { memo } from "react"

function NumberButton(props){
    return (
        <button className="num-button" id={props.Value} onClick={props.func}>
            {props.Value}
        </button>
    )
}

export default memo(NumberButton);
import react from "react";
import '../styles/TodoButton.css'

export function CreateTodoButtom(props){
    const onClickButton = (msg) => {
        alert(msg);
    }
    return(
        <button
        className="CreateTodoButtom"
        onClick={() => onClickButton("Test")}
        >+</button>
    );}

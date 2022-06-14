import react from "react";
import '../styles/TodoButton.css'

export function CreateTodoButtom(props){
    const onClickButton = () => {
        //mi solucion
        props.setOpenModal(props.openModal ? false : true);
        //solucion de platzi
        //props.setOpenModal(prevState => !prevState);
    }
    return(
        <div>
        <button
        className="CreateTodoButtom"
        onClick={() => onClickButton()}
        >+</button>
        </div>

    );}

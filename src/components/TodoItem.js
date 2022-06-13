import react from "react";
import '../styles/TodoList.css'

export function TodoItem(props){
    const onComplete = () => {
        console.log(props.completed)
        alert('Ya completaste el todo ' + props.text);
      };
      const onDelete = () => {
        alert('Borraste el todo ' + props.text);
      };
    return(
        <div className="TodoList">
        <li>   
            <div className="botoneslist">
            <a 
            role="button" 
            onClick={props.onDelete}
            className="Borrar">❌</a>
            <a 
            role="button" 
            className="Terminado"
            onClick={props.onComplete}
            >✅</a>
            </div>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'} TodoItem`}>{props.text}</p>
            <p className="time">9 am</p>
        </li>
        </div>

    );
}
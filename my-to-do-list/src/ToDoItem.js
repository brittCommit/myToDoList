import React from "react";
import App from "./App";

function ToDoItem(props) {
    return (
    <div className = "todo-list ">
        <input type = "checkbox"/>
        <p>{props.item.text}</p>
    </div>
    );
}

export default ToDoItem;
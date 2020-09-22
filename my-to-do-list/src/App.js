import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from "./ToDoItem.js";
import ToDoData from "./ToDoData.js";

function App() {
  const ToDoItems = ToDoData.map(item => <ToDoItem key={item.id} item={item}/>)
  return (
    <div  className = "todo-list ">
      {ToDoItems}
    </div>
  )
}
export default App;

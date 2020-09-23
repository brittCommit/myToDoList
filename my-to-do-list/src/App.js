import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from "./ToDoItem.js";
import ToDoData from "./ToDoData.js";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: ToDoData
    }
  }

  render() {
    const ToDoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}/>)
    return (
      <div  className = "todo-list ">
        {ToDoItems}
      </div>
    )
  }
}
export default App;

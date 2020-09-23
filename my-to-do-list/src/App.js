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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
}

  render() {
    const ToDoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div  className = "todo-list ">
        {ToDoItems}
      </div>
    )
  }
}
export default App;

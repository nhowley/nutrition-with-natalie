import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state={
    todos: [
      {id: 1, content: 'Onions', quantity: '2', department:'Fruit and Veg', checked:false},
      {id: 2, content: 'Oat milk', quantity: '300ml', department: 'Dairy', checked:false}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id //if not equal, returns false and deletes todo
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos:todos
    })
  }
  handleCheck=(e) =>{
      this.setState({ checked: true });
      console.log(this.state)
  }
  render(){
  return (
    <div className="flex justify-center items-center flex-col p-10">
      <h1 className="text-2xl">Create your shopping list</h1>
      <div className="flex-col w-full md:w-4/5 lg:w-2/5 p-4">
        <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    </div>
  );
}
}

export default App;

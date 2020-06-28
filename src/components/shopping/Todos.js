import React from 'react'



const Todos = ({todos, deleteTodo, handleCheck}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
            <div className="collection-item flex py-2" key={todo.id}>
              <div className="w-1/4">
                <input type="checkbox" onChange={handleCheck}/>
                <label className="ml-2">{todo.content}</label>
              </div>
              <div className="w-1/4">
                <img src="/img/garbage.png" alt="delete" width="20px" onClick={() => {deleteTodo(todo.id)}}/>
              </div>
              <div className="w-1/4"><p>{todo.quantity}</p></div>
              <div className="w-1/4"><p>{todo.department}</p></div>
            </div>
            )
        })
    ) : (
        <p className="center">Add items to your shopping list</p>
    )
    return (
      <div>
        <div className="todos collection p-4 border flex flex-col">
          <div className="flex">
            <div className="w-1/2 font-bold">Item</div>
            <div className="w-1/4 font-bold">Quantity</div>
            <div className="w-1/4 font-bold">Department</div>
          </div>
          <div>
          {todoList}
          </div>
        </div>
      </div>
    )
}

export default Todos
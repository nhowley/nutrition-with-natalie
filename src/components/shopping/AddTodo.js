import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: '',
        quantity: '',
        department: '',
        checked: false
    }
    handleChangeContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleChangeQuantity = (e) => {
      this.setState({
          quantity: e.target.value
      })
  }
  handleChangeDepartment = (e) => {
    this.setState({
        department: e.target.value
    })
}
    handleSubmit = (e) => {
       e.preventDefault();
       this.props.addTodo(this.state);
       this.setState({
           content:'',
           quantity: '',
           department: 'Department'
       })
    }
    render(){
        return(
            <div className="flex justify-center">
                <form onSubmit={this.handleSubmit} className="w-full p-4">
                  <div className="bg-white h-8 xxl:h-12 mt-3 flex mt-2">
                    <input type = "text" onChange={this.handleChangeContent} value={this.state.content} placeholder="Add new ingredient or recipe" className="py-1 xxl:py-3 px-4 w-1/2"/>
                    <input type = "text" onChange={this.handleChangeQuantity} value={this.state.quantity} placeholder="Quantity" className="ml-2 py-1 xxl:py-3 px-4 w-1/5"/>
                    <select onChange={this.handleChangeDepartment} value={this.state.department} className="ml-2 py-1 xxl:py-3 px-4 w-1/4">
                      <option value="">Department</option>
                      <option value="Fruit and Veg">Fruit and Veg</option>
                      <option value="Dairy">Dairy</option>
                      <option value="Canned">Canned goods</option>
                    </select>
                    <button className="ml-2 bg-teal h-8 xxl:h-12 w-1/12 relative text-white">
                      <p>Add</p>
                    </button>
                  </div>
                </form>
            </div>
        )
    }
}

export default AddTodo
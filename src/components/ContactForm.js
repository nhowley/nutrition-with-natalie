// Equivalent to CreateProject in Marioplan
import React, { Component } from 'react'
import axios from 'axios'

class ContactMe extends Component {
  state = {
    firstName: '',
    lastName:'',
    email:'',
    message:'',
    emailSent: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("state", this.state)
    axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success'){
          this.formSuccess()
        }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
        }
      })
  }

  formSuccess(){
    this.setState({
        emailSent:true
    })
 }

render() {
return (
<div className="h-full contact-overlay">
  
  <div className="relative h-full">
  <div className="w-full sm:w-3/5 lg:w-2/5 my-0 mx-auto absolute transform-translate-center">
 
    <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
        <img className="close-contact absolute" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1587577287/cross.png" onClick={this.props.close}/>
      {!this.state.emailSent ? <div>
        <h1 className="text-center mt-8 font-normal text-2xl">Thank you for your interest!</h1>
        <h2 className="text-center mt-6 mb-2 font-normal text-lg">Feel free to ask any questions, or simply enter your name and email address and I'll send you more info about the Nutrition with Natalie program.</h2>
        <div className="mb-4">
            <label htmlFor="firstName" className="block text-grey text-sm font-bold mb-2 mt-6">First Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
            type="text" id="firstName" onChange={this.handleChange}></input>
            <label htmlFor="lastName" className="block text-grey text-sm font-bold mb-2 mt-4">Last Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
            type="text" id="lastName" onChange={this.handleChange}></input>
            <label htmlFor="email" className="block text-grey text-sm font-bold mb-2 mt-4">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
            type="text" id="email" onChange={this.handleChange}></input>
            <label htmlFor="message" className="block text-grey text-sm font-bold mb-2 mt-4">Message</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
            type="text" id="message" onChange={this.handleChange}></textarea>
            <button  onClick={this.handleSubmit} className="bg-purple hover:bg-green text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline">
            Submit
            </button>
        </div>
    </div> :
    <div>
        <h1 className="text-center mt-8 font-normal text-2xl">Email sent!</h1>
        <h2 className="text-center mt-6 mb-2 font-normal text-lg">Thank you for your email. If you don't hear back from me in 48 hours then please send me an email at nutritionwithnataliehowley@gmail.com</h2>
    </div>
    }
    </form>
  </div>
  </div>
</div>
    )
  }
}


export default ContactMe
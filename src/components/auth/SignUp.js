import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'


class SignUp extends Component {
  state={
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleChange = (e) => {
    this.setState({
    [e.target.id]: e.target.value
  })
  }
  handleSubmit= (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }
  render() {
    const { auth, authError } = this.props;
    if(auth.uid) return <Redirect to = '/' />
    return (
     <div>
      <h1 className="text-center mt-8 font-normal text-2xl">Sign Up</h1>
      <div className="relative h-full" height="700px">
      <div className="w-full sm:w-3/5 lg:w-2/5 my-0 mx-auto ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div className="mb-4">
            <label className="block text-grey text-sm font-bold mb-2" htmlFor="first-name">
              First name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="John" onChange={this.handleChange}/>
          </div>
          <div className="mb-4">
            <label className="block text-grey text-sm font-bold mb-2" htmlFor="last-name">
             Last name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Smith" onChange={this.handleChange}/>
          </div>
          <div className="mb-4">
            <label className="block text-grey text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="John@test.com" onChange={this.handleChange}/>
          </div>
          <div className="mb-6">
            <label className="block text-grey text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={this.handleChange}/>
            <p className="text-red-darker text-xs italic">Please choose a password.</p>
          </div>
          {/* <div className="mb-6">
            <label className="block text-grey text-sm font-bold mb-2" htmlFor="program">
              Which program would you like to sign up for?
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey mb-3 leading-tight focus:outline-none focus:shadow-outline" id="program" type="program" placeholder="******************" onChange={this.handleChange}/>
            <p className="text-red-darker text-xs italic">Please choose a password.</p>
          </div> */}
          <div className="flex items-center justify-between">
            <button className="bg-purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.handleSubmit}>
              Sign Up
            </button>
            <div>
              <p>Already have an account? <a href="/signin"><span class="underline text-green hover:text-purple">Log In</span></a></p>
            </div>
          </div>
          <div className="text-red text-center">
            { authError ? <p>{ authError }</p> : null}
          </div>
        </form>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state={
    email: '',
    password:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit= (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to = '/' />
    return (
     <div>
      <h1 className="text-center mt-8 font-normal text-2xl">Sign In</h1>
      <div className="relative h-full" height="700px">
      <div className="w-full sm:w-3/5 lg:w-2/5 my-0 mx-auto ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <label className="block text-grey text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" onChange={this.handleChange}/>
          </div>
          <div className="mb-6">
            <label className="block text-grey text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="***************" onChange={this.handleChange}/>
            <p className="text-red-darker text-xs italic">Please enter your password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-purple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.handleSubmit}>
              Sign In
            </button>
            <a className="inline-block ml-2 align-baseline font-bold text-sm text-green hover:text-purple" href="/forgot-password">
              Forgot Password?
            </a>
          </div>
          <div className="text-red text-center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

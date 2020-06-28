import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
return(
  <div>
    <div className="lg:hidden">
      <p onClick={props.signOut} className="block mt-4 lg:hidden lg:mt-0 text-white hover:text-white no-underline xl:text-lg xxl:text-xl">
              Sign out
      </p>
    </div>
    <div className="lg:hidden">
          <a href="/my-account"
            className="inline-block lg:hidden text-sm xl:text-lg xxl:text-xl  px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 no-underline">My Account</a>
    </div>
    <div className="hidden lg:inline-block">
      <p onClick={props.signOut} className="hidden mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline xl:text-lg xxl:text-xl">
              Sign out
      </p>
    </div>
    <div className="hidden lg:inline-block">
          <a href="/my-account"
            className=" hidden lg:inline-block text-sm xl:text-lg xxl:text-xl  px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 no-underline">My Account</a>
    </div>
  </div>
)
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
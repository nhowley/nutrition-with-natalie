import React, { Component } from 'react'
import '../../index.css';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

class Navbar extends Component {
  state = {
    showNavMobile: false
  }

  toggleMobileNav = () => {
    this.setState({
      showNavMobile: !this.state.showNavMobile
    })
  }
 
  render(){
    const { auth } = this.props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
return(
  <nav className="flex items-center justify-between flex-wrap bg-teal p-6 lg:mt-0">
    <div className="block lg:hidden w-full">
      <button
        onClick={this.toggleMobileNav}
        className="flex items-center px-3 py-2 border rounded text-white hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      {this.state.showNavMobile ? 
      <div className="mobile-nav w-full">
        <div className="nav-option mt-4  hover:bg-white">
          <a href="/" className="text-white hover:text-teal no-underline mt-4">HOME</a>
        </div>
        <div className="nav-option mt-4  hover:bg-white">
          <a href="/recipes" className="text-white hover:text-teal no-underline mt-4">Recipes</a>
        </div>
        <div className="nav-option mt-4 hover:text-teal hover:bg-white">
          <a href="/macros" className="text-white hover:text-teal no-underline mt-4"> Calculate your macros</a>
        </div>
        { links }
      </div> : null }
    </div>
    <div className="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto relative flex">
      <div className="text-sm xl:text-lg xxl:text-xl lg:flex-grow">
        <a href="/recipes" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline">
          Recipes
        </a>
        {/* <a href="/shopping-list" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline">
          Shopping List
        </a> */}
        {/* <a href="/meal-planner" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline">
          Meal Planner
        </a> */}
        <a href="/macros" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline">
          Calculate your macros
        </a>
      </div>
      <div className="absolute inline-block transform-translate-above lg:logo-transform-translate text-teal bg-white p-4 z-50 pt-8">
        {/* <a href="/"><p className="text-2xl">Logo</p></a> */}
        <a href="/"><img className="logo-navbar" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1589987516/NWN_Full_Logo_tujm2y.png" alt="Logo"/></a>
      </div>
      { links } 
    </div>
  </nav>
)
}
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)
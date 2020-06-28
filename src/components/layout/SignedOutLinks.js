import React from 'react'

const SignedOutLinks = () => {
return(
  <div>
    <div className="lg:hidden">
      <a href="/signin" className="block mt-4 lg:hidden text-white hover:text-white no-underline">
            Sign In
      </a>
    </div>
    <div className="lg:hidden">
          <a href="/signup"
            className="inline-block lg:hidden text-sm xl:text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 no-underline">Sign Up</a>
    </div>
    <div className="hidden lg:inline-block">
      <a href="/signin" className="hidden xl:text-xl  mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline">
            Sign In
      </a>
    </div>
    <div className="hidden lg:inline-block">
          <a href="/signup"
            className="hidden lg:inline-block text-sm xl:text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 no-underline">Sign Up</a>
    </div>
  </div>
)
}

export default SignedOutLinks

import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

const ShowResults = (props) => {
  console.log(props)
  const { macro } = props;
    return(
      <div className="mx-auto mt-8">
                <button className="eighth next button-teal hover:bg-green">Calculate results</button>
              <Link to={"/macros/" + macro.user}>
                <button className="eighth next button-teal hover:bg-green">See my results</button>
              </Link>
            </div>
    )
  }

const mapStateToProps = (state) =>{
  return{
    macro:macros
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'macros'}
  ])
)(ShowResults)
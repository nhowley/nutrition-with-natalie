
import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Results = (props) => {
  console.log (props);
  const { user } = props;
  if (user){
    return(
      <div>
      {/* Head visual */}
      <section>
        <div className="object-fit relative">
          <img className="results-header" src="/img/macros-head-visual_cropped.jpg" alt="Burger meal"/>
          {/* <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w, ${xlarge} 3200w`} alt="Kitchen Surface"/> */}
          <div className="absolute transform-translate-center w-full lg:w-3/5 p-8">
            <h1 className="text-white text-3xl lg:text-5xl 2xl:text-6xl text-center">How much do you need to eat to achieve your goal?</h1>
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row p-4 lg:p-10">
          <div className="px-6 lg:w-1/2">
            <h2 className="text-center text-3xl text-blue">YOUR RESULTS</h2>
            <div className="flex flex-col mt-4 items-center">
              <div className="w-2/5 md:w-1/6">
                <img src={user.gender==='female' ? "/img/female.png" : "/img/male.png"} alt="gender"/>
               </div>
            </div>
            <div className="flex flex-wrap mt-4 justify-center lg:px-24">
              <div>
                <div className="macro-result border-red">
                  <p className="absolute transform-translate-center text-2xl">{user.weight}{user.unit}</p>
                </div>
                <p className="text-center text-sm mt-2">WEIGHT</p>
              </div>
              <div className="">
                <div className="macro-result border-orange">
                  <p className="absolute transform-translate-center text-2xl">{user.bodyFat}%</p>
                </div>
                <p className="text-center text-sm mt-2">BODY FAT</p>
              </div>
              <div className="">
                <div className="macro-result mx-auto border-blue">
                  <p className="absolute transform-translate-center text-2xl">{user.LBM}kg</p>
                </div>
                <p className="text-center text-sm mt-2 max-w-xxxs">LEAN BODY MASS</p>
              </div>
              <div className="">
                <div className="macro-result border-purple">
                  <p className="absolute transform-translate-center text-2xl text-center leading-none">{user.BMR} cal</p>
                </div>
                <p className="text-center text-sm mt-2">BMR</p>
              </div>
              <div className="">
                <div className="macro-result border-green">
                  <p className="absolute transform-translate-center text-2xl text-center leading-none">{user.TDEE} cal</p>
                </div>
                <p className="text-center text-sm mt-2">TDEE</p>
              </div>
            </div>
          </div>

          <div className="px-6 mt-6 lg:mt-0 lg:w-1/2">
            <h2 className="text-center text-3xl text-blue">YOUR TARGETS</h2>
            <div className="flex flex-col mt-10 items-center">
              <div className="w-2/5 md:w-1/5">
                <img src={user.goal==='Build Muscle' ? "/img/dumbbell.png" : "/img/flame.png"} alt="goal"/>
               </div>
            </div>
            <div className="flex flex-col mt-16 items-center">
              <h3 className="text-2xl">Calories per day:</h3>
              <p className="text-6xl text-blue">{user.goalCalories}</p>
            </div>
            <div className="flex mt-4 justify-center">
              <div>
                <div className="rounded-50 w-80 h-80 relative mr-2 bg-purple">
                  <p className="absolute transform-translate-center text-2xl text-white">{user.fatGrams}g</p>
                </div>
                <p className="text-center text-sm mt-2">FAT</p>
              </div>
              <div className="">
                <div className="rounded-50 w-80 h-80 relative mr-2 bg-purple">
                  <p className="absolute transform-translate-center text-2xl text-white">{user.proteinGrams}g</p>
                </div>
                <p className="text-center text-sm mt-2">PROTEIN</p>
              </div>
              <div className="">
                <div className="rounded-50 w-80 h-80 relative mr-2 mx-auto bg-purple">
                  <p className="absolute transform-translate-center text-2xl text-white">{user.carbsGrams}g</p>
                </div>
                <p className="text-center text-sm mt-2 max-w-xxxs">CARBS</p>
              </div>
            </div>
          </div>
          {/* Calculate Daily Intake */}
          
        </div>
        {/* <section>
            <div className="relative p-20">
              <button className="button-teal 2xl:p-6 absolute transform-translate-center hover:bg-green">Create your meal plan</button>
            </div>
          </section> */}
        </div>
        
            )
          }
          return (
            <div className="container">Loading results...</div>
          )
        }

  const mapStateToProps = (state, ownProps) =>{
    console.log(ownProps)
    const id = ownProps.match.params.id;
    const users = state.firestore.data.users;
    const user = users ? users[id] : null
    return{
      user:user
    }
  }
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      {collection: 'users'}
    ])
  )(Results)

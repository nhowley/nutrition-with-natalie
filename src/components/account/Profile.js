
import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Profile = (props) => {
  console.log (props);
  const { profile } = props;
    return(
      <div>
        <div className="flex p-6 flex-col lg:flex-row">
          <div className="sm:w-full lg:w-1/4 p-3">
              {/* <img className="mx-auto mb-4" src={profile.photo ? profile.photo : ''} alt="Seafood Risotto" /> */}
              <div>
                <h1 className="text-purple text-2xl mb-4">{profile.firstName + ' ' + profile.lastName}</h1>
                <ul className="text-sm">
                  <li className="active font-bold">Profile</li>
                  {/* <li>Account Settings</li>
                  <li>Help</li> */}
                  <li>Sign Out</li>
                </ul>
              </div>
          </div>
          <div className="sm:w-full lg:w-3/4 p-3 lg:ml-24">
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-oleo text-purple">My Recipes</h1>
              <div className="flex flex-col lg:flex-row mb-3">
                <div className="flex flex-row">
                  {/* <div className="w-1/3  text-center">
                    <p className="text-2xl mb-2">23</p>
                    <p>Added from other sources</p>
                  </div>
                  <div className="w-1/3  text-center px-5">
                    <p className="text-2xl mb-2">17</p>
                    <p>Created by you</p>
                  </div> */}
                  <div className="w-1/3  text-center px-3">
                    <p className="text-2xl mb-2">24</p>
                    <p>Favourited Recipes</p>
                  </div>
                </div>
                <div className="w-full text-center px-3 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                  <div>
                    <a href="/my-recipes">
                      <button className="bg-green text-white px-2 py-1 flex flex-row items-center justify-end">
                        <p>Go to your recipes</p>
                        <img src="img/fast-forward-arrow-white.png" className="w-3 ml-2"/>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-oleo text-purple">About Me</h1>
              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-wrap lg:flex-no-wrap mt-2 justify-center md:justify-start">
                  <div>
                    <div className="macro-result border-pink">
                      <p className="absolute transform-translate-center text-2xl">{profile.age}</p>
                    </div>
                    <p className="text-center text-sm mt-2">AGE</p>
                  </div>
                  <div>
                    <div className="macro-result border-red">
                      <p className="absolute transform-translate-center text-2xl">{profile.weight}{profile.unit}</p>
                    </div>
                    <p className="text-center text-sm mt-2">WEIGHT</p>
                  </div>
                  <div>
                    <div className="macro-result border-orange">
                      <p className="absolute transform-translate-center text-2xl">{profile.bodyFat}%</p>
                    </div>
                    <p className="text-center text-sm mt-2">BODY FAT</p>
                  </div>
                  <div>
                    <div className="macro-result mx-auto border-blue">
                      <p className="absolute transform-translate-center text-2xl">{profile.LBM}kg</p>
                    </div>
                    <p className="text-center text-sm mt-2 max-w-xxxs">LEAN BODY MASS</p>
                  </div>
                  <div>
                    <div className="macro-result border-purple">
                      <p className="absolute transform-translate-center text-2xl text-center leading-none">{profile.BMR} cal</p>
                    </div>
                    <p className="text-center text-sm mt-2">BMR</p>
                  </div>
                  <div>
                    <div className="macro-result border-green">
                      <p className="absolute transform-translate-center text-2xl text-center leading-none">{profile.TDEE} cal</p>
                    </div>
                    <p className="text-center text-sm mt-2">TDEE</p>
                  </div>
                  <div>
                    <div className="w-120 h-80 relative mr-2 mt-2 text-center">
                      <p className="text-xl leading-none transform-translate-center absolute">{profile.exercise}</p>
                    </div>
                    <p className="text-center text-sm mt-2">EXERCISE</p>
                  </div>
                </div>
                <div className="w-full text-center px-3 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                  <div>
                    <a href="/macros">
                      <button className="bg-green text-white px-2 py-1 flex flex-row items-center">
                        <p>Recalculate</p>
                        <img src="img/fast-forward-arrow-white.png" className="w-3 ml-2"/>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="mb-2 text-3xl font-oleo text-purple">My Targets</h1>
              <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col md:flex-row mt-2 justify-center items-center md:items-start lg:justify-start">
                <div>
                  <div className="w-120 h-120 relative md:mr-10 mt-2 text-center rounded-50 border border-yellow-500">
                    <p className="absolute transform-translate-center text-xl">{profile.goal}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center md:mr-10 mt-4 md:mt-0">
                  <p className="text-6xl md:text-4xl text-blue">{profile.goalCalories}</p>
                  <h3 className="text-xl">Calories per day</h3>
                </div>
                <div className="flex items-center justify-center md:mr-10 mt-4 md:mt-0">
                  <div>
                    <div className="rounded-50 w-80 h-80 relative mr-2 bg-purple">
                      <p className="absolute transform-translate-center text-white text-2xl">{profile.fatGrams}g</p>
                    </div>
                    <p className="text-center text-sm mt-2 max-w-xxxs">FAT</p>
                  </div>
                  <div>
                    <div className="rounded-50 w-80 h-80 relative mr-2 bg-purple">
                      <p className="absolute transform-translate-center text-2xl text-center text-white leading-none">{profile.proteinGrams}g</p>
                    </div>
                    <p className="text-center text-sm mt-2">PROTEIN</p>
                  </div>
                  <div>
                    <div className="rounded-50 w-80 h-80 relative mr-2 bg-purple">
                      <p className="absolute transform-translate-center text-2xl text-center text-white leading-none">{profile.carbsGrams}g</p>
                    </div>
                    <p className="text-center text-sm mt-2">CARBS</p>
                  </div>
                </div>
            </div>
            <div className="w-full text-center px-3 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
              <div>
                <a href="/macros">
                  <button className="bg-green text-white px-2 py-1 flex flex-row items-center">
                    <p>Recalculate</p>
                    <img src="img/fast-forward-arrow-white.png" className="w-3 ml-2"/>
                  </button>
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        
            )
          }

  const mapStateToProps = (state) =>{
    console.log(state)
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      {collection: 'users'}
    ])
  )(Profile)

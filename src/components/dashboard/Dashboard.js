import React, { Component } from 'react'
import RecipeList from '../recipes/RecipeList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  state={
    recipesToShow: [],
    showFilters: false,
    checkboxes:[]
  }

  componentDidUpdate (prevProps, prevState){
    if(prevProps.recipes !== this.props.recipes) {
       this.setState({
          recipes: this.props.recipes,
          recipesToShow: this.props.recipes
        })
    }
  }

  // need to add function if this.state.recipesToShow !== this.state.recipes then filter recipesToShow (to make sure all filters apply)
  handleMealChange = (e) => {
    console.log("e", e.target.value)
      let mealsToShow= this.state.recipes.filter(recipe => {
        console.log("recipe", recipe.meal)
          return recipe.meal === e.target.value
      })
      if (e.target.value === "Meal Type"){ mealsToShow = this.state.recipes }
      this.setState({ recipesToShow: mealsToShow });
  }


  handleTimeChange = (e) => {
    console.log("e", e.target.value)
    let mealsToShow= this.state.recipes.filter(recipe => {
      if (e.target.value === "30 mins"){
        return recipe.cookingTimeMinutes <= 30 && recipe.cookingTimeHours < 1
      }
      if (e.target.value ==="1 hour"){
        return recipe.cookingTimeMinutes <= 59 && recipe.cookingTimeHours < 2
      }
      console.log("recipe", recipe)
    })
    if (e.target.value === "Cooking time"){ mealsToShow = this.state.recipes }
    this.setState({ recipesToShow: mealsToShow });
  }

  toggleFilters = () => {
    this.setState({
      showFilters: !this.state.showFilters
    })
  }
  
  handleCheckboxChange = (e) => {
    console.log(e.target.checked)
    let checkbox = e.target.name
    let mealsToShow= []
    //if checkbox is checked, remove filter
    let checkboxes=this.state.checkboxes
    if(e.target.checked){
      checkboxes = [...checkboxes, e.target.name]
    } else {
      checkboxes.filter(checkbox=> {
        return checkbox !== e.target.name
      })
    }

    // if (this.state.recipesToShow.length < this.state.recipes.length){
    //   // mealsToShow = this.state.recipesToShow.filter(recipe => {
    //   //   return recipe.checkboxes[checkbox]
    //   // }) 

    //   mealsToShow = []
    //   this.state.recipesToShow.forEach(recipe => {
    //     // find all checked boxes and create new object of just true
    //     var checkedTrue = Object.keys(recipe.checkboxes).reduce((p, c) => {    
    //       if (recipe.checkboxes[c]) p[c] = recipe.checkboxes[c];
    //       return p;
    //     }, {});
    //     console.log("checkedTrue", Object.keys(checkedTrue))
    //     // return recipe that matches the recipe.checkboxes and the filters checkboxes
    //     const filters = Object.keys(checkedTrue).some(r=> checkboxes.indexOf(r) >= 0)
    //     console.log("filters", filters)
    //     if (filters){
    //       mealsToShow.push(recipe)
    //     }
    //   })
    //   console.log("mealsToShow", mealsToShow)

    // } else {
      mealsToShow = []
      this.state.recipesToShow.forEach(recipe => {
        // find all checked boxes and create new object of just true
        var checkedTrue = Object.keys(recipe.checkboxes).reduce((p, c) => {    
          if (recipe.checkboxes[c]) p[c] = recipe.checkboxes[c];
          return p;
        }, {});
        console.log("checkedTrue", Object.keys(checkedTrue))
        // return recipe that matches the recipe.checkboxes and the filters checkboxes
        const filters = Object.keys(checkedTrue).some(r=> checkboxes.indexOf(r) >= 0)
        console.log("filters", filters)
        if (filters){
          mealsToShow.push(recipe)
        }
      })
    // }
    this.setState({ 
        recipesToShow: mealsToShow,
        checkboxes: checkboxes 
      });
  }

  render() {
    console.log(this.props)
    const { recipes } = this.props;
    console.log("recipes", recipes)
    const isDesktop = window.innerWidth > 900
    return (      
      <div className="flex flex-col py-6 px-4 md:px-2 lg:px-10">
          {/* Top bar */}
          <div className="flex mb-4">
            <div className="flex justify-around lg:justify-start w-full lg:w-1/5">
              {/* <p className="mr-4">My recipes</p> */}
              {/* <p className="mr-4 font-bold">All recipes</p>
              <div>
                <img src="/img/like.png" width="24px" alt="like"/>
              </div> */}
              <p className="ml-4 lg:hidden" onClick={this.toggleFilters}>Filters</p>
            </div>
             {/* Recipe search */}
            {/* <div className="flex w-3/5">
              <div className="ml-10 bg-gray-300 py-2 px-5">
                <p>BROWSE</p>
              </div>
              <div className="flex justify-between">
                <div className="h-10 text-gray-400 py-2 px-4">
                  <p>Find a recipe</p>
                </div>
                <div className="bg-teal h-10 py-1 px-3 flex justify-center ">
                  <div>
                    <img src="/img/search-white.png" width="24px" className="mt-1" alt="search"/>
                  </div>
                </div>
              </div>
            </div> */}
            {/* add recipe */}
            {/* <div className="flex w-1/5  justify-end">
              <button className="bg-purple text-white px-3 flex">
                <p>Add Recipe</p>
                <img src="/img/add-white.png" width="16px" className="ml-3 mt-1" alt="add"/>
              </button>
            </div> */}
        </div>
        {/* Recipes and filters */}
        
        <div className="flex mt-5 flex-col lg:flex-row">
        {this.state.showFilters || isDesktop ? 
          <div className="filters w-full h-screen absolute lg:relative bg-white lg:w-1/6 lg:h-full mb-6 lg:mb-0">
            <p className="text-2xl mb-2">Filter by:</p>
            <div className="flex flex-col pr-2">
            <select className="mb-2" name="meal" onChange={this.handleMealChange}>
                <option value="Meal Type" onClick={this.handleMealChange}>Meal Type</option>
                <option value ="Breakfast" onClick={this.handleMealChange}>Breakfast</option>
                <option value="Main Meal" onClick={this.handleMealChange}>Main Meal</option>
                <option value="Protein Shake" onClick={this.handleMealChange}>Shake</option>
                <option value="Snack" onClick={this.handleMealChange}>Snack</option>
                <option value="Dessert" onClick={this.handleMealChange}>Dessert</option>
              </select>
              <select className="mb-2" onChange={this.handleTimeChange}>
                <option value="Cooking time">Cooking time</option>
                <option value="30 mins">Under 30 mins</option>
                <option value="1 hour">Under 1 hour</option>
              </select>
              <p className="mt-2 mb-2">Diet:</p>
                <label className="flex items-center">
                  <input
                    name="Vegetarian"
                    type="checkbox"
                    className="mr-2"
                    // checked={this.state.diet}
                    onChange={this.handleCheckboxChange} />
                    Vegetarian
                </label>
                <label className="flex items-center">
                  <input
                    name="Vegan"
                    type="checkbox"
                    className="mr-2"
                    // checked={this.state.diet}
                    onChange={this.handleCheckboxChange} />
                    Vegan
                </label>
                <label className="flex items-center">
                  <input
                    name="Gluten-Free"
                    type="checkbox"
                    className="mr-2"
                    // checked={this.state.diet}
                    onChange={this.handleCheckboxChange} />
                    Gluten Free
                </label>
                <p className="mt-4 mb-2">Intolerances:</p>
                <label className="flex items-center">
                  <input
                    name="Dairy-Free"
                    type="checkbox"
                    className="mr-2"
                    // checked={this.state.diet}
                    onChange={this.handleCheckboxChange} />
                    Dairy
                </label>
                <label className="flex items-center">
                  <input
                    name="egg"
                    type="checkbox"
                    className="mr-2"
                    // checked={this.state.diet}
                    onChange={this.handleCheckboxChange} />
                    Egg
                </label>
                <label className="flex items-center">
                  <input
                    name="Nut-free"
                    type="checkbox"
                    className="mr-2"
                    // checked={this.state.diet}
                    onChange={this.handleCheckboxChange} />
                    Peanut
                </label>
                <label className="flex items-center">
                  <input
                    name="soy"
                    type="checkbox"
                    className="mr-2"
                    // checked={this.state.diet}
                    onChange={this.handleCheckboxChange} />
                    Soy
                </label>
              {/* <select className="mb-2">
                <option>Price</option>
                <option>Under &#163;2</option>
              </select> */}
              {/* <select >
                <option>Chef</option>
                <option>Jamie Oliver</option>
                <option>Nigella Lawson</option>
              </select> */}
            </div>
          </div> : null }
          <div className="w-full lg:w-5/6">
            {/* {this.state.recipesToShow.length > 0 ?  */}
            <RecipeList recipes={this.state.recipesToShow}/> 
            {/* // : <p>We currently do not have any recipes to show which match these filters. Please try again.</p>} */}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    recipes: state.firestore.ordered.recipes,
    auth: state.firebase.auth,
    recipesToShow:  state.firestore.ordered.recipes
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(Dashboard)
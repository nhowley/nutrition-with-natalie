// Equivalent to CreateProject in Marioplan
import React, { Component } from 'react'
import Checkbox from "../Checkbox";
import DropdownSelect from '../DropdownSelect';
import TextArea from '../TextArea';
import { connect } from 'react-redux'
import { addRecipe } from '../../store/actions/recipeActions'
import { Redirect } from 'react-router-dom'

const OPTIONS = ["Gluten-Free", "Dairy-Free", "Vegan", "Vegetarian", "Nut-free"];
const MealOPTIONS = ["Select here", "Breakfast", "Main Meal", "Snack", "Protein Shake", "Side"];

class AddRecipe extends Component {
  state = {
    title: '',
    ingredients: [],
    method: [],
    description: '',
    notes:'',
    photo:'',
    meal: '',
    servings: '',
    cookingTimeHours: '',
    cookingTimeMinutes: '',
    carbs: '',
    fat: '',
    protein: '',
    calories: '',
    image: '',
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  }
  handleChange = (e) => {
    this.nl2br();
   
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleEnter = (e) => {
    console.log("e.target.value", e.target.value)
    
    if(e.key === 'Enter') {
      if (e.target.name ==='ingredients'){
          let ingredientArray = []
          ingredientArray.push(e.target.value)
          let ingredientsFormatted = ingredientArray[0].split("\n")
          this.setState({
            ingredients: ingredientsFormatted
          })
      } else if (e.target.name === 'method'){
        console.log("method")
          let methodArray = []
          methodArray.push(e.target.value)
          let methodFormatted = methodArray[0].split("\n")
          this.setState({
            method: methodFormatted
          })
      } 
      
    } 

  }

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
      };
  handleImageUpload = (e) =>{
    const realInput = document.getElementById('photo');
    const fileInfo = document.querySelector('.file-info');

    realInput.addEventListener('change', () => {
      const name = realInput.value.split(/\\|\//).pop();
      // const truncated = name.length > 20 
      //   ? name.substr(name.length - 20) 
      //   : name;
      
      fileInfo.textContent = name;
      this.setState({
        photo:realInput.value
      })
    });
  
}
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.addRecipe(this.state);
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  }
  
  createCheckbox = option => (
    <Checkbox
      formClassName="mb-6 text-center inline-block m-auto"
      labelClassName="border border-pink hover:bg-pink rounded-full p-2 cursor-pointer mr-2 checkbox-label"
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
      className="dietary-reqs hidden my-8"
      id={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  createDropdownSelect= option => (
    <DropdownSelect
      name="meal"
      id="meal"
      handleChange={this.handleChange}
      className="text-grey text-sm"
      optionValue={option}
      optionText={option}
      key={option}      
      />
  );

  createDropdownSelectOptions = () => MealOPTIONS.map(this.createDropdownSelect);


   nl2br = (str, replaceMode, isXhtml) => {
  var breakTag =  '<br />'
  var replaceStr = (replaceMode) ? '$1'+ breakTag : '$1'+ breakTag +'$2';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replaceStr);
}

render() {
  const { auth } = this.props;
  if(!auth.uid) return <Redirect to = '/signin' />
return (
<div className="h-full">
  <h1 className="text-center mt-8 font-normal text-2xl">Add a Recipe</h1>
  <div className="relative h-full">
  <div className="w-full sm:w-3/5 lg:w-2/5 my-0 mx-auto ">
    <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-grey text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
          id="title" name="title" type="text" placeholder="Seafood Risotto" onChange={this.handleChange}/>
      </div>
      <TextArea
      className="mb-4"
      labelClassName="block text-grey text-sm font-bold mb-2"
      id="ingredients"
      labelText="Ingredients"
      rows="7"
      textAreaClassName="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
      // handleChange={this.handleChange} 
      handleKeyPress={this.handleEnter}
      placeholder="3 medium carrots
1 medium sweet potato
1 tablespoon olive oil
1/8 teaspoon salt
2 tablespoons pure maple syrup"
      />
      <TextArea
      className="mb-4"
      labelClassName="block text-grey text-sm font-bold mb-2"
      id="method"
      labelText="Method"
      rows="7"
      textAreaClassName="shadow appearance-none border rounded w-full py-2 px-3 text-grey mb-3 leading-tight focus:outline-none focus:shadow-outline"
      // handleChange={this.handleChange} 
      handleKeyPress={this.handleEnter}
      placeholder="1. Chop the sweet potato"
      />
      <TextArea
      className="mb-4"
      labelClassName="block text-grey text-sm font-bold mb-2"
      id="description"
      labelText="Description"
      rows="3"
      textAreaClassName="shadow appearance-none border rounded w-full py-2 px-3 text-grey mb-3 leading-tight focus:outline-none focus:shadow-outline"
      handleChange={this.handleChange} 
      placeholder="Perfect for the weekend, this amazing risotto will blow everyone away."
      />
      <TextArea
      className="mb-4"
      labelClassName="block text-grey text-sm font-bold mb-2"
      id="notes"
      labelText="Notes"
      rows="3"
      textAreaClassName="shadow appearance-none border rounded w-full py-2 px-3 text-grey mb-3 leading-tight focus:outline-none focus:shadow-outline"
      handleChange={this.handleChange} 
      placeholder="Can use honey instead of maple syrup"
      />
      <div className="mb-4 hide text-center">
        <h2 className="text-grey text-sm font-bold mb-3 mr-2">Upload a photo:</h2>
          <label className="inline-block text-grey text-sm mb-2 border cursor-pointer p-2 browse-btn rounded hover:bg-purple hover:text-white mr-2 upload-" htmlFor="photo" 
          onClick={this.handleImageUpload}>
            Choose a file
          </label>
            <input 
            type ="file"
            id="photo"
            name="photo"
            className="real-input"
            accept="image/png, image/jpeg"
            />
        <p className="file-info text-xs inline">No file chosen</p>
      </div>
      <div className="mb-6 text-center">
          <h2 className="block text-grey text-sm font-bold mb-2 mr-2 sm:inline">Image url:</h2>
          <label htmlFor="cookingTimeHours">
            <input 
            type="text"
            name="image"
            id="image"
            className="border mr-2"
            onChange={this.handleChange}>
            </input>
          </label>
        </div>
      <div className="nutrition  flex">
        <div className="mb-6 text-center">
          <h2 className="block text-grey text-sm font-bold mb-2 mr-2 sm:inline">Calories:</h2>
          <label htmlFor="cookingTimeHours">
            <input 
            type="number"
            min="0"
            name="calories"
            id="calories"
            className="border w-12 mr-2"
            onChange={this.handleChange}>
            </input>
          </label>
        </div>
        <div className="mb-6 text-center">
          <h2 className="block text-grey text-sm font-bold mb-2 mr-2 sm:inline">Carbs:</h2>
          <label htmlFor="cookingTimeHours">
            <input 
            type="number"
            min="0"
            name="carbs"
            id="carbs"
            className="border w-12 mr-2"
            onChange={this.handleChange}>
            </input>
            <span className="mr-2 text-xs">g</span> 
          </label>
        </div>
        <div className="mb-6 text-center">
          <h2 className="block text-grey text-sm font-bold mb-2 mr-2 sm:inline">Fat:</h2>
          <label htmlFor="cookingTimeHours">
            <input 
            type="number"
            min="0"
            name="fat"
            id="fat"
            className="border w-12 mr-2"
            onChange={this.handleChange}>
            </input>
            <span className="mr-2 text-xs">g</span> 
          </label>
        </div>
        <div className="mb-6 text-center">
          <h2 className="block text-grey text-sm font-bold mb-2 mr-2 sm:inline">Protein:</h2>
          <label htmlFor="cookingTimeHours">
            <input 
            type="number"
            min="0"
            name="protein"
            id="protein"
            className="border w-12 mr-2"
            onChange={this.handleChange}>
            </input>
            <span className="mr-2 text-xs">g</span> 
          </label>
        </div>
      </div>
      <div className="mb-6 text-center">
        <h2 className="block text-grey text-sm font-bold mb-2 mr-2 sm:inline">Cooking time:</h2>
        <label htmlFor="cookingTimeHours">
          <input 
          type="number"
          min="0"
          name="cookingTimeHours"
          id="cookingTimeHours"
          className="border w-8 mr-2"
          onChange={this.handleChange}>
          </input>
          <span className="mr-2 text-xs">hrs</span> 
        </label>
        <label htmlFor="cookingTimeMinutes">
          <input
          type="number"
          min="0"
          max="59"
          name="cookingTimeMinutes"
          id="cookingTimeMinutes"
          className="border w-12 mr-2"
          onChange={this.handleChange}>
          </input>
          <span className="text-xs">mins</span>
        </label>
      </div>
      <div className="mb-6 text-center">
        <h2 className="block text-grey text-sm font-bold mb-2 mr-2 inline">Servings:</h2>
        <input
        type="number"
        step=".5"
        name="servings"
        id="servings"
        className="border w-12"
        onChange={this.handleChange}>
        </input>
      </div>
      <div className="mb-8 text-center">
          <h2 className="block text-grey text-sm font-bold mb-2 mr-2 inline">Select meal type:</h2>
          <select name="meal" id="meal" onChange={this.handleChange} className="text-grey text-sm">
            {this.createDropdownSelectOptions()}
          </select>
      </div>
      <div className="text-center mb-4 dietary">
        {this.createCheckboxes()}
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-purple hover:bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Recipe
        </button>
      </div>
    </form>
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
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addRecipe: (recipe) => dispatch(addRecipe(recipe))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)
// Equivalent to ProjectDetails in Marioplan

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Printer, { print } from 'react-pdf-print'
import { render } from 'react-dom'
import ShareButton from 'react-social-share-buttons'

const ids = ['1']


class IndividualRecipe extends Component {
  state={
    print: false
  }

  printModeOn = () => {
    this.setState({
      print: true
    }, () => {print(ids); 
      setInterval(() => {
        window.location.reload(false)
      }, 1000);
    })
  }

  socialShare = () => {

  }

render(){
  console.log(this.props)
  const { recipe } = this.props;
  console.log("recipe", recipe)
  if (recipe){
    return(
      <div>
  <Printer>
      <div className="container p-6 recipe-page" id={ids[0]} style={this.state.print ? { width:'210mm', height: '297mm' } : {width: '100%'}}>
      <div className="flex mb-4 flex-wrap sm:flex-no-wrap recipe-content">
        <div className="w-full sm:w-1/4 object-fit ">
        <div className="title text-center sm:hidden">
              <h1 className="mb-2 mr-2 text-2xl inline-block">{recipe.title}</h1>
              {/* <img className="mb-2 inline-block" src="/img/edit.png" width="20px" alt="Edit" /> */}
        </div>
        <hr className="sm:hidden bg-gray-200 h-px mt-2 mb-2 " />
        <div className="dietary-req-boxes flex">
              {recipe.checkboxes["Dairy-Free"] === true ?  
              <div className="bg-purple mr-2 w-full px-2 py-1 mb-4 text-center text-white text-sm mt-4 dietary sm:hidden"> 
                <p>Dairy Free</p>
              </div>: null}
              {recipe.checkboxes["Gluten-Free"] === true ? 
              <div className="bg-purple mr-2 w-full px-2 py-1 mb-4 text-center text-white text-sm mt-4 dietary sm:hidden">
                <p>Gluten Free</p>
              </div> : null}
              {recipe.checkboxes["Nut-Free"] === true ? 
              <div className="bg-purple mr-2 w-full px-2 py-1 mb-4 text-center text-white text-sm mt-4 dietary sm:hidden">
                <p>Nut Free</p>
              </div> : null}
              {recipe.checkboxes["Vegetarian"] === true ? 
              <div className="bg-purple mr-2 w-full px-2 py-1 mb-4 text-center text-white text-sm mt-4 dietary sm:hidden">
                <p>Vegetarian</p>
              </div> : null}
              {recipe.checkboxes["Vegan"] === true ? 
              <div className="bg-purple mr-2 w-full px-2 py-1 mb-4 text-center text-white text-sm mt-4 dietary sm:hidden">
                <p>Vegan</p>
              </div> : null}
          </div>
          <div className="recipe-image-icons">
            <img className="mb-2 object-fit recipe-img" src={recipe.image} alt="Seafood Risotto" />
            <div className="mb-2 mt-1 px-2 flex justify-between">
              <div className="justify-start">
                <img className="mb-2 mr-2 inline-block" src="/img/like.png" width="25px" alt="Add to Favourites" />
                <img className="mb-2 lg:inline-block hidden" src="/img/printer.png" width="25px" alt="Printer" onClick={() => {this.printModeOn()}} />
                {/* <img className="mb-2 mr-2 inline-block" src="/img/calendar-clock.png" width="25px" alt="Calendar" />
                <img className="mb-2 inline-block" src="/img/shopping-cart.png" width="25px" alt="Shopping Cart" /> */}
              </div>
              <div className="justify-end">
                {/* <img className="mb-2 mr-2 inline-block" src="/img/share.png" width="25px" alt="Share" /> */}
                <div className="social-share flex">
                <ShareButton
                  compact
                  socialMedia={'facebook'}
                  url={window.location.href}
                  media={recipe.image}
                  text={recipe.title}
                />
                <ShareButton
                  compact
                  socialMedia={'twitter'}
                  url={window.location.href}
                  media={recipe.image}
                  text={recipe.title}
                />
                {/* <img className="mail-icon ml-1 cursor-pointer" src ="/img/envelope.png" alt="Email"></img> */}
                
              </div>
                
              </div>
              
            </div>
            
            </div>
            <div className="p-3 ingredients sm:block hidden">
              <div className="flex justify-between">
                <h1 className="mb-2 text-3xl font-oleo text-purple">Ingredients</h1>
                {/* <img className="mb-2 self-center justify-end" src="/img/edit.png" width="20px" alt="Edit" /> */}
              </div>
              <div>
              {recipe.ingredients.map(ingredient => (
                <p>{ingredient}</p>
              ))}
              </div>
              {/* <ul>
                <li className="mb-1">400 g mixed cherry tomatoes , on the vine</li>
                <li className="mb-1">2 cloves of garlic</li>
                <li className="mb-1">½ a bunch of fresh rosemary , (15g)</li>
                <li className="mb-1">olive oil</li>
                <li className="mb-1">6 raw langoustines , or large king prawns, shell on, from sustainable sources</li>
                <li className="mb-1">300 g mussels , scrubbed, debearded, from sustainable sources</li>
                <li className="mb-1">500 g clams , scrubbed, from sustainable sources</li>
                <li className="mb-1">4 medium squid , cleaned, gutted (300g total), from sustainable sources</li>
                <li className="mb-1">300 g cooked white crab meat , from sustainable sources</li>
                <li className="mb-1">1 pinch of saffron</li>
                <li className="mb-1">1 large onion</li>
                <li className="mb-1">1 heart of celery</li>
                <li className="mb-1">1 bulb of fennel</li>
                <li className="mb-1">400 g risotto rice</li>
                <li className="mb-1">½ a glass of white wine , or rosé wine</li>
                <li className="mb-1">1.6 litres quality fish stock , (see tip)</li>
                <li className="mb-1">1 knob of butter , (30g)</li>
                <li className="mb-1">30 g Parmesan cheese</li>
                <li className="mb-1">extra virgin olive oil</li>
              </ul> */}
            </div>
          </div>
  
          <div className="w-full sm:w-3/4 h-12 p-4 pt-0 lg:p-6 lg:ml-16 recipe-info ">
            <div className="title sm:block hidden">
              <h1 className="mb-2 mr-2 text-2xl inline-block">{recipe.title}</h1>
              {/* <img className="mb-2 inline-block" src="/img/edit.png" width="20px" alt="Edit" /> */}
            </div>
            <div className="dietary-req-boxes flex">
              {recipe.checkboxes["Dairy-Free"] === true ?  
              <div className="bg-purple mr-2 w-32 px-2 py-1 text-center text-white text-sm mt-4 dietary sm:block hidden">
                <p>Dairy Free</p>
              </div> : null}
              {recipe.checkboxes["Gluten-Free"] === true ? 
              <div className="bg-purple mr-2 w-32 px-2 py-1 text-center text-white text-sm mt-4 dietary sm:block hidden">
                <p>Gluten Free</p>
              </div> : null}
              {recipe.checkboxes["Nut-Free"] === true ? 
              <div className="bg-purple mr-2 w-32 px-2 py-1 text-center text-white text-sm mt-4 dietary sm:block hidden">
                <p>Nut Free</p>
              </div> : null}
              {recipe.checkboxes["Vegetarian"] === true ? 
              <div className="bg-purple mr-2 w-32 px-2 py-1 text-center text-white text-sm mt-4 dietary sm:block hidden">
                <p>Vegetarian</p>
              </div> : null}
              {recipe.checkboxes["Vegan"] === true ? 
              <div className="bg-purple mr-2 w-32 px-2 py-1 text-center text-white text-sm mt-4 dietary sm:block hidden">
                <p>Vegan</p>
              </div> : null}
              </div>
              <div className="cooking-time flex flex-col lg:inline-block">
                <hr className="hidden lg:inline-block bg-gray-200 h-px mt-4 mb-2 "/>
                <p className="mt-2 inline-block font-bold">Serves<span className="text-blue"> {recipe.servings}</span> </p>
                <p className="mt-2 lg:ml-3 inline-block font-bold">Cooking Time<span className="text-blue"> {recipe.cookingTimeHours}hr {recipe.cookingTimeMinutes}mins</span></p>
                <hr className="bg-gray-200 h-px mt-4 mb-2" />
              </div>
              <div className="nutrition">
                <p className="mt-2 inline-block font-bold">Nutritional Value (per serving)</p>
                <div className="mt-4 flex content-around flex-wrap sm:flex-no-wrap">
                  <div className="border-black border w-24 text-center text-sm py-2 px-5 mr-3 mt-2 lg:mt-0">
                    <p>Calories</p>
                    <p>{recipe.calories}</p>
                    {/* <hr className="bg-black h-px my-1" /> */}
                    {/* <p>28%</p> */}
                  </div>
                  <div className="border-black border w-24 text-center text-sm py-2 px-5 mr-3 mt-2 lg:mt-0">
                    <p>Carbs</p>
                    <p>{recipe.carbs}g</p>
                    {/* <hr className="bg-black h-px my-1" /> */}
                    {/* <p>28%</p> */}
                  </div>
                  <div className="border-black border w-24 text-center text-sm py-2 px-5 mr-3 mt-2 lg:mt-0">
                    <p>Protein</p>
                    <p>{recipe.protein}g</p>
                    {/* <hr className="bg-black h-px my-1" /> */}
                    {/* <p>28%</p> */}
                  </div>
                  <div className="border-black border w-24 text-center text-sm py-2 px-5 mr-3 mt-2 lg:mt-0">
                    <p>Fat</p>
                    <p>{recipe.fat}g</p>
                    {/* <hr className="bg-black h-px my-1" /> */}
                    {/* <p>28%</p> */}
                  </div>
                  {/* <div className="border-black border w-24 text-center text-sm py-2 px-5 mr-3">
                    <p>Saturates</p>
                    <p>551</p>
                    <hr className="bg-black h-px my-1" />
                    <p>28%</p>
                  </div>
                  <div className="border-black border w-24 text-center text-sm py-2 px-5 mr-3">
                    <p>Sugars</p>
                    <p>551</p>
                    <hr className="bg-black h-px my-1" />
                    <p>28%</p>
                  </div>
                  <div className="border-black border w-24 text-center text-sm py-2 px-5 mr-3">
                    <p>Salt</p>
                    <p>551</p>
                    <hr className="bg-black h-px my-1" />
                    <p>28%</p>
                  </div>
                  <div className="border-black border w-24 text-center text-sm py-2 px-5 mr-3">
                    <p>Fibre</p>
                    <p>551</p>
                    <hr className="bg-black h-px my-1" />
                    <p>28%</p>
                  </div> */}
                </div>
              </div>
              <hr className="bg-gray-200 h-px mt-6 mb-2" />
              <div className="ingredients mb-6 sm:hidden">
              <div className="flex justify-between">
                <h1 className="mb-2 text-3xl font-oleo text-purple">Ingredients</h1>
                {/* <img className="mb-2 self-center justify-end" src="/img/edit.png" width="20px" alt="Edit" /> */}
              </div>
              <div>{recipe.ingredients.map(ingredient => (
                <p>{ingredient}</p>
              ))}</div>
              {/* <ul>
                <li className="mb-1">400 g mixed cherry tomatoes , on the vine</li>
                <li className="mb-1">2 cloves of garlic</li>
                <li className="mb-1">½ a bunch of fresh rosemary , (15g)</li>
                <li className="mb-1">olive oil</li>
                <li className="mb-1">6 raw langoustines , or large king prawns, shell on, from sustainable sources</li>
                <li className="mb-1">300 g mussels , scrubbed, debearded, from sustainable sources</li>
                <li className="mb-1">500 g clams , scrubbed, from sustainable sources</li>
                <li className="mb-1">4 medium squid , cleaned, gutted (300g total), from sustainable sources</li>
                <li className="mb-1">300 g cooked white crab meat , from sustainable sources</li>
                <li className="mb-1">1 pinch of saffron</li>
                <li className="mb-1">1 large onion</li>
                <li className="mb-1">1 heart of celery</li>
                <li className="mb-1">1 bulb of fennel</li>
                <li className="mb-1">400 g risotto rice</li>
                <li className="mb-1">½ a glass of white wine , or rosé wine</li>
                <li className="mb-1">1.6 litres quality fish stock , (see tip)</li>
                <li className="mb-1">1 knob of butter , (30g)</li>
                <li className="mb-1">30 g Parmesan cheese</li>
                <li className="mb-1">extra virgin olive oil</li>
              </ul> */}
            </div>
              <div className="method">
                <div className="flex justify-between">
                  <h1 className="mb-2 text-3xl font-oleo text-purple justify-start">Method</h1>
                  {/* <img className="mb-2 self-center justify-end" src="/img/edit.png" width="20px" alt="Edit" /> */}
                </div>
                <div>
                {recipe.method.map(method => (
                <p>{method}</p>
              ))}
                </div>
                {/* <ul>
                  <li className="mb-2">1. Preheat the oven to 160°C/325°F/gas 3.</li>
                  <li className="mb-2">2. Blanch the tomatoes in a large pan of boiling water for 30 seconds. Remove with a slotted spoon to a
                    bowl of ice-cold water and peel the skins. Tip into a medium roasting tray.</li>
                  <li className="mb-2">3. Peel and slice the garlic, pick the rosemary leaves and scatter over the tomatoes. Drizzle over a
                    little oil, then toss to coat and space them out in a single layer. Roast for 40 minutes, or until golden.
                  </li>
                  <li className="mb-2">4. Remove the heads and tails from the langoustines, then peel the skin and roughly chop the sweet meat.
                    Check the mussels and sort through the clams, giving any that aren’t tightly closed a tap. If they don’t
                    close, discard them. Finely slice the squid and reserve for later. Pick through the crab meat, removing
                    any shell.</li>
                  <li className="mb-2">5. Put the saffron in a small bowl, cover with 50ml of freshly boiled water and leave to infuse.</li>
                  <li className="mb-2">6. For the risotto, peel and finely chop the onion, celery and fennel, reserving any nice leaves and
                    herby tops for garnish, then place in a large, high-sided pan on a medium heat with 3 tablespoons of olive
                    oil. Cook for 15 minutes, or until softened but not coloured, stirring occasionally, then stir in the rice
                    to toast for 2 minutes.</li>
                  <li className="mb-2">7. Pour in the wine, and stir until absorbed. Add a ladleful of stock and wait until it’s been fully
                    absorbed before adding another, stirring for around 10 seconds every minute and continuing to add
                    ladlefuls of stock until the rice is soft and a pleasure to eat, but retains its shape and a tiny bit of
                    bite. It will need 16 to 18 minutes.</li>
                  <li className="mb-2">8. Add the saffron and its soaking liquid, then stir in the mussels and clams.</li>
                  <li className="mb-2">9. When the mussels are just starting to open up, go in with the squid, crab and langoustine. Beat in
                    the butter, finely grate and and beat in the Parmesan, then season to perfection and turn the heat off.
                    Cover the pan and leave to relax for 1 to 2 minutes so the risotto becomes creamy and oozy. Beat again,
                    adding a little extra stock if necessary.</li>
                  <li className="mb-2">10. Carefully pour the risotto onto a large platter and discard any mussels or clams that remain closed.
                    Dot over the roasted tomatoes, scatter over the reserved celery leaves and herby fennel tops, then drizzle
                    with a little extra virgin olive oil. Dish up and enjoy!</li>
                </ul> */}
              </div>
              <div className="notes">
                <div className="flex justify-between">
                  <h1 className="mb-2 mt-6 text-3xl font-oleo text-purple">Notes</h1>
                  {/* <img className="mb-2 self-center justify-end" src="/img/edit.png" width="20px" alt="Share" /> */}
                </div>
                <p className="mb-6">{recipe.notes}</p>
              </div>
          </div>
      </div>
    </div>
    </Printer>
  </div>
    )
  }

  return (
    <div className="container">Loading recipe...</div>
  )
}

}


const mapStateToProps = (state, ownProps) =>{
  console.log(ownProps)
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null
  return{
    recipe:recipe,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'recipes'}
  ])
)(IndividualRecipe)
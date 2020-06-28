import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import IndividualRecipe from './components/recipes/IndividualRecipe'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddRecipe from './components/recipes/AddRecipe';
import Home from './components/Index';
import Footer from './components/layout/Footer';
import Macros from './components/macros/Macros';
import Results from './components/macros/Results';
import Profile from './components/account/Profile';
import MealPlanner from './components/MealPlanner';
import BodyFatCalc from './components/BodyFatCalc';
import Shopping from './components/shopping/Shopping';
import Terms from './components/legal/terms-and-conditions.js';
import Privacy from './components/legal/privacy-policy.js';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipes" component={Dashboard} />
            <Route path="/recipe/:id" component={IndividualRecipe} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/add" component={AddRecipe} />
            <Route exact path="/macros" component={Macros} />
            <Route path="/macros/:id" component={Results} />
            <Route path="/my-account" component={Profile} />
            <Route path="/mealplanner" component={MealPlanner} />
            <Route path="/body-fat-calculators" component={BodyFatCalc} />
            <Route path="/shopping-list" component={Shopping} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy-policy" component={Privacy} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

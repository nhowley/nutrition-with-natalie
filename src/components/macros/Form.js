import React, { Component } from 'react'
import DropdownSelect from '../DropdownSelect';
import { addMacros } from '../../store/actions/macroActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'



const ExerciseOPTIONS= [
  {
    text: "Sedentary (little or no exercise)",
    value: "Sedentary"
  },
  {
    text: "Light activity (light exercise/sports 1 to 3 days per week)",
    value: "Light Activity"
  },
  {
    text: "Moderate activity (moderate exercise/sports 3 to 5 days per week)",
    value: "Moderate Activity"
  },
  {
    text: "Very active (hard exercise/sports 6 to 7 days per week)",
    value: "Very active"
  },
  {
    text:"Extra active (very hard exercise/sports 6 to 7 days per week and physical job)",
    value:"Extra Active"
  }
];

class Form extends Component {
  state = {
    hover: false,
    showForm: true,
    showQuestionOne: true,
    showQuestionTwo: false,
    showQuestionThree: false,
    showQuestionFour: false,
    showQuestionFive: false,
    showQuestionSix: false,
    showQuestionSeven: false,
    showQuestionEight: false,
    age:'',
    gender:'',
    weight:'',
    unit:'lbs',
    goal:'',
    bodyFat:'',
    exercise:'Sedentary',
    LBMPercent:'',
    LBM:'',
    BMR:'',
    TDEE:'',
    weightKilos:'',
    weightPounds:'',
    goalCalories:'',
    proteinCalories:'',
    proteinGrams:'',
    fatCalories:'',
    fatGrams:'',
    carbsCalories:'',
    carbsGrams:''
  }
  handleClickForm = (e) =>{
    
    this.props.addMacros(this.state);
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  showQuestionOne = (e) =>{
    e.preventDefault();
    this.setState({ 
      showQuestionOne: true,      
      showQuestionTwo: false,
      showQuestionThree: false,
      showQuestionFour: false,
      showQuestionFive: false,
      showQuestionSix: false,
      showQuestionSeven: false,
      showQuestionEight: false
    });
  }
  showQuestionTwo = (e) =>{
    e.preventDefault();
    this.setState({ 
      showQuestionOne: false,      
      showQuestionTwo: true,
      showQuestionThree: false,
      showQuestionFour: false,
      showQuestionFive: false,
      showQuestionSix: false,
      showQuestionSeven: false,
      showQuestionEight: false
    });
  }
  showQuestionThree = (e) =>{
    e.preventDefault();
    this.setState({ 
      showQuestionOne: false,      
      showQuestionTwo: false,
      showQuestionThree: true,
      showQuestionFour: false,
      showQuestionFive: false,
      showQuestionSix: false,
      showQuestionSeven: false,
      showQuestionEight: false
     });
     this.convertWeight();
  }
  showQuestionFour = (e) =>{
    e.preventDefault();
    this.setState({ 
      showQuestionOne: false,      
      showQuestionTwo: false,
      showQuestionThree: false,
      showQuestionFour: true,
      showQuestionFive: false,
      showQuestionSix: false,
      showQuestionSeven: false,
      showQuestionEight: false
     });
     
  }
  showQuestionFive = (e) =>{
    e.preventDefault();
    this.setState({ 
      showQuestionOne: false,      
      showQuestionTwo: false,
      showQuestionThree: false,
      showQuestionFour: false,
      showQuestionFive: true,
      showQuestionSix: false,
      showQuestionSeven: false,
      showQuestionEight: false
     });
     this.calculateLBM();
      this.calculateBMR();
  }
  showQuestionSix = (e) =>{
    e.preventDefault();
    this.setState({ 
      showQuestionOne: false,      
      showQuestionTwo: false,
      showQuestionThree: false,
      showQuestionFour: false,
      showQuestionFive: false,
      showQuestionSix: true,
      showQuestionSeven: false,
      showQuestionEight: false
     });
     this.calculateTDEE();
     this.calculateFat();
     this.calculateProtein();
  }
  showQuestionSeven = (e) =>{
    e.preventDefault();
    this.setState({ 
      showQuestionOne: false,      
      showQuestionTwo: false,
      showQuestionThree: false,
      showQuestionFour: false,
      showQuestionFive: false,
      showQuestionSix: false,
      showQuestionSeven: true,
      showQuestionEight: false
     });
     this.chooseGoal();
     this.calculateCarbs();
  }
  createDropdownSelect= option => (
    <DropdownSelect
      name="exercise"
      handleChange={this.handleChange}
      className="text-grey text-sm"
      optionValue={option.value}
      optionText={option.text}
      key={option.value}      
      />
  );
  createDropdownSelectOptions = () => ExerciseOPTIONS.map(this.createDropdownSelect);
  //hover for radio buttons
    hoverOn = (e) =>{
    this.setState({ hover: true });
    }
    hoverOff = (e) =>{
      this.setState({ hover: false });
    };
  // Calculate Lean Body Mass
  calculateLBM = (e) => {
    let LBMPercent= Number(100 - this.state.bodyFat)
    let LBM = parseFloat((LBMPercent / 100) * this.state.weightKilos).toFixed(1);
    this.setState({ 
      LBMPercent: LBMPercent,
      LBM: LBM
     });
  }
//Calculate Basal Metabolic Rate
  calculateBMR = (e) => {
    let BMR = Math.round(370 + (21.6 * this.state.weightKilos));
    this.setState({ 
      BMR:BMR
     });
  };
// Calculate TDEE based on level of activity
  calculateTDEE = (e) => {
    let TDEE;
    if(this.state.exercise === "Sedentary") {
      TDEE = Math.round(this.state.BMR * 1.1);
    } else if (this.state.exercise === "Light Activity"){
      TDEE = Math.round(this.state.BMR * 1.2);
    } else if (this.state.exercise === "Moderate Activity"){
      TDEE = Math.round(this.state.BMR * 1.35);
    } else if (this.state.exercise === "Very active"){
      TDEE = Math.round(this.state.BMR * 1.45);
    } else if (this.state.exercise === "Extra Active"){
      TDEE = Math.round(this.state.BMR * 1.7);
    };
    this.setState({ 
      TDEE:TDEE
     });
  };
  //Convert weight into pounds and kilos
  convertWeight = (e) =>{
    let weightKilos;
    let weightPounds;
    if(this.state.unit === "lbs") {
      weightKilos = Number(this.state.weight) / 2.2046;
      weightPounds = this.state.weight
    } else {
      weightKilos = this.state.weight;
      weightPounds = Number(this.state.weight) * 2.2046;
    }
    this.setState({ 
      weightKilos:weightKilos,
      weightPounds:weightPounds
     });
  };
  //Goal Calories
  chooseGoal = (e) =>{
    let goalCalories;
    if (this.state.goal === "Burn Fat"){
      goalCalories = Math.floor(this.state.TDEE * 0.8);
    } else if (this.state.goal === "Build Muscle") {
      goalCalories = Math.floor(this.state.TDEE * 1.1);
    }
    this.setState({ 
      goalCalories:goalCalories
     });
  };
  
  //calculate protein needed per day
  calculateProtein = (e) => {
    let proteinGrams;
    let proteinCalories;
    if (this.state.goal === "Burn Fat"){
      proteinGrams = Math.round(1.2 * (this.state.weightPounds));
    } else if (this.state.goal === "Build Muscle"){
     proteinGrams = Math.round(this.state.weightPounds);
    };
    proteinCalories = proteinGrams * 4;
    this.setState({ 
      proteinGrams:proteinGrams,
      proteinCalories: proteinCalories
     });
  }; 
  //calculate fat needed per day
  calculateFat = (e) =>{
    let fatGrams;
    let fatCalories;
    if (this.state.goal === "Burn Fat"){
    fatGrams = Math.round (0.2 * (this.state.weightPounds));
  } else if (this.state.goal === "Build Muscle"){
    fatGrams = Math.round(0.3 * (this.state.weightPounds));
  };
    fatCalories = fatGrams * 9;
    this.setState({ 
      fatGrams:fatGrams,
      fatCalories:fatCalories
     });
  };
  //calculate carbs needed per day
  calculateCarbs = (e) => {
    let carbsCalories = Math.round(this.state.TDEE - this.state.proteinCalories - this.state.fatCalories);
    let carbsGrams = Math.round(carbsCalories / 4);
    this.setState({ 
      carbsGrams:carbsGrams,
      carbsCalories:carbsCalories
    });
  };

  render() {
    const { auth } = this.props
    if(!auth.uid) return <Redirect to = '/signup' />
    return (
      <div className={this.state.showForm ? 'block' : 'hidden'}>
      <div className="text-center p-6 mt-10 mb-4">
          <p>Fill in the form below to calculate your recommended daily intake</p>
      </div>
      <div className="form">
      <div className="questionnaire flex">
        <div className="line h-1 bg-blue relative rounded-sm mb-10 w-1/2 mx-auto flex">
          <div className={this.state.showQuestionOne ? 'bg-blue dot border question-one' : 'dot bg-white border question-one'} onClick={this.showQuestionOne} id="dot-one"></div>
          <div className={this.state.showQuestionTwo ? 'bg-blue dot ml-2 border question-two' : 'dot bg-white ml-2 border question-two'} onClick={this.showQuestionTwo} id="dot-two" ></div>
          <div className={this.state.showQuestionThree ? 'bg-blue dot ml-2 border question-three' : 'dot bg-white ml-2 border question-three'} onClick={this.showQuestionThree} id="dot-three"></div>
          <div className={this.state.showQuestionFour? 'bg-blue dot ml-2 border question-four' : 'dot bg-white ml-2 border question-four'} onClick={this.showQuestionFour} id="dot-four"></div>
          <div className={this.state.showQuestionFive ? 'bg-blue dot ml-2 border question-five' : 'dot bg-white ml-2 border question-five'} onClick={this.showQuestionFive} id="dot-five"></div>
          <div className={this.state.showQuestionSix ? 'bg-blue dot ml-2 border question-six' : 'dot bg-white ml-2 border question-six'} onClick={this.showQuestionSix} id="dot-six"></div>
          <div className={this.state.showQuestionSeven ? 'bg-blue dot ml-2 border question-seven' : 'dot bg-white ml-2 border question-seven'} onClick={this.showQuestionSeven} id="dot-seven"></div>
        </div>
      </div>
     {/* Question 1 */}
     <div className={this.state.showQuestionOne ? 'block' : 'hidden'}>
        <form className="slider-form slider-one">
          <div className="flex flex-col">
              <h2 className="text-black mb-3 text-3xl text-center">What is your gender?</h2>
              <div className="mx-auto flex mt-4" id="choose-gender">
                <label className={this.state.hover || this.state.gender==="male" ? "gender transform-120" : "gender"}  onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                  <input id="male" type="radio" name="gender" className="opacity-0 fixed" value="male" onChange={this.handleChange}/>
                  <img src="/img/male.png" width="150px" id="male" className="image" alt="Male Icon"/>
                </label>
                <label className={this.state.hover || this.state.gender==="female" ? "gender transform-120" : "gender"}  onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                  <input id="female" type="radio" name="gender" className="opacity-0 fixed" value="female" onChange={this.handleChange}/>
                  <img src="img/female.png" width="150px" id="female" className="image" alt="Female Icon"/>
                </label>
            </div>
            <div className="mx-auto mt-4">
              <button className="first next button-teal hover:bg-green mt-4" onClick={this.showQuestionTwo}>Next Step</button>
            </div>
          </div>
        </form>
      </div>
       {/* Question 2 */}
       <div className={this.state.showQuestionTwo ? 'block' : 'hidden'}>
          <form className="slider-form slider-two">
            <div className="flex flex-col">
              <h2 className="text-black mb-3 text-3xl text-center">How much do you weigh?</h2>
              <div className="mx-auto flex mt-4" id="choose-weight">
              <label className="weight-input">
                <input type="number" className="name border py-1 px-3 mr-3" placeholder="Your weight" id="weight" name="weight" onChange={this.handleChange}/>
              </label>
                <select id="unit" name="unit" onChange={this.handleChange}>
                      <option value="lbs" className="weight-options" name="unit" onChange={this.handleChange}>lbs</option>
                      <option value="kgs" className="weight-options" name="unit" onChange={this.handleChange}>Kgs</option>
                </select>
              </div>
              <div className="mx-auto mt-4">
                <button className="second next button-teal hover:bg-green mt-4" onClick={this.showQuestionThree}>Next Step</button>
              </div>
            </div>
          </form>
        </div>
       {/* Question 3 */}
       <div className={this.state.showQuestionThree ? 'block' : 'hidden'}>
      <form className="slider-form slider-three">
        <div className="flex flex-col">
          <h2 className="text-black mb-3 text-3xl text-center">What is your main aim?</h2>
          <div className="mx-auto flex mt-4" id="choose-goal">
            <label className={this.state.hover ? "goal transform-120" : "goal"}  onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
              <input type="radio" name="goal" className="opacity-0 fixed" value="Burn Fat" onChange={this.handleChange}/>
              <img src="/img/flame.png" width="150px" id= "fat-burn" className="image" alt="Burn fat"/>
            </label>
            <label className={this.state.hover ? "goal transform-120" : "goal"}  onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
              <input type="radio" name="goal" className="opacity-0 fixed" value="Build Muscle" onChange={this.handleChange}/>
              <img src="/img/dumbbell.png" width="150px" id = "muscle-build" className="image" alt="Gain muscle"/>
            </label>
          </div>
          <div className="mx-auto mt-4">
          <button className="three next button-teal hover:bg-green mt-6" onClick={this.showQuestionFour}>Next Step</button>
          </div>
          </div>
        </form>
        </div>
    {/* Question 4 */}
    <div className={this.state.showQuestionFour ? 'block' : 'hidden'}>
        <form className="slider-form slider-four">
          <div className="flex flex-col">
            <h2 className="text-black mb-3 text-3xl text-center">What is your body fat percentage?</h2>
            <div className="mx-auto flex flex-col mt-4">
              <label className="weight-input mx-auto">
                <input type="number" className="name border" placeholder="Body fat %" id="body-fat-input" name="bodyFat" onChange={this.handleChange}/>
              </label>
              <p className="mt-8"><a href ="body-fat-calculators" target="_blank">I don't know my body fat percentage</a></p>
            </div>
            <div className="mx-auto mt-4">
              <button className="four next button-teal hover:bg-green mt-4" onClick={this.showQuestionFive}>Next Step</button>
            </div>
          </div>
        </form>
        </div>
        {/* Question 5 */}
        <div className={this.state.showQuestionFive ? 'block' : 'hidden'}>
        <form className="slider-form slider-five">
          <div className="flex flex-col">
            <h2 className="text-black mb-3 text-3xl text-center p-2">On average, how much exercise do you do each week?</h2>
            <div className="mx-auto flex flex-col mt-4">
              {/* <select id="exercise" name="exercise" onChange={this.handleChange}>
              {this.createDropdownSelectOptions()}
                </select> */}
                <div className="px-6">
                  <div className="mb-2">
                    <input type="radio" id="Sedentary" name="exercise" value="Sedentary" className="mr-2" />
                    <label for="Sedentary">Sedentary (little or no exercise)</label>
                  </div>
                  <div className="mb-2">
                    <input type="radio" id="Light Activity" name="exercise" value="Light Activity" className="mr-2"/>
                    <label for="Light Activity">Light activity (light exercise/sports 1 to 3 days per week)</label>
                  </div>
                  <div className="mb-2">
                    <input type="radio" id="Moderate Activity" name="exercise" value="Moderate Activity" className="mr-2"/>
                    <label for="Moderate Activity">Moderate activity (moderate exercise/sports 3 to 5 days per week)</label>
                  </div>
                  <div className="mb-2">
                    <input type="radio" id="Very active" name="exercise" value="Very active" className="mr-2"/>
                    <label for="Very active">Very active (hard exercise/sports 6 to 7 days per week)</label>
                  </div>
                  <div className="mb-2">
                    <input type="radio" id="Extra Active" name="exercise" value="Extra Active" className="mr-2"/>
                    <label for="Extra Active">Extra active (very hard exercise/sports 6 to 7 days per week and physical job)</label>
                  </div>
                </div>
              
              <div className="mx-auto mt-8 lg:mt-4 p-2">
                <button className="fifth next button-teal hover:bg-green" onClick={this.showQuestionSix}>Next Step</button>
              </div>
            </div>
          </div>
        </form>
        </div>
        {/* Question 6 */}
        <div className={this.state.showQuestionSix ? 'block' : 'hidden'}>
        <form className="slider-form slider-six">
          <div className="flex justify-center flex-col">
            <h2 className="text-black mb-3 text-3xl text-center">And finally, please tell us your age.</h2>
            <div className="mx-auto mt-4">
              <input type="text" className="name border py-1 px-3 mr-3" placeholder="54" id="age" name="age" onChange={this.handleChange} required />
              <button className="sixth next button-teal hover:bg-green" onClick={this.showQuestionSeven}>Next Step</button>
            </div>
          </div>
        </form>
      </div>
      {/* Question 7 */}
        <div className={this.state.showQuestionSeven ? 'block' : 'hidden'}>
        <form className="slider-form slider-seven">
          <div className="flex flex-col">
            <h2 className="text-black mb-3 text-3xl text-center">Thank you for your input!</h2>
            <div className="mx-auto mt-8">
              <Link to={"/macros/" + auth.uid}>
                <button className="seventh next button-teal hover:bg-green" onClick={this.handleClickForm}>See my results</button>
              </Link>
            </div>
          </div>
        </form>
        </div>
        </div>
        </div>
    )
  }
};


const mapDispatchToProps = (dispatch) => {
  return{
    addMacros: (macro) => dispatch(addMacros(macro))
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'macros' }
  ])
)(Form)
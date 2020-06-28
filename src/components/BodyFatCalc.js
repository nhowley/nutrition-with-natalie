import React, { Component } from 'react'

class BodyFatCalc extends Component {
  state = {
   hover: false,
   gender:'',
   abdominal:'',
   tricep:'',
   thigh:'',
   suprailiac:'',
   bodyFat:''
  }
  render() {
    return (
      <div className = "px-12 py-10" >
        <h1 className="text-2xl text-center mt-10 ">Calculate your body fat percentage</h1>
        <h2 className="mt-8"> Method 1: Caliper Measurements </h2>
        <div className="flex">
          <div className="flex w-1/5 p-10 mx-0 my-auto">
            <img src = "/img/female.png" width = "60px" className="mr-6"/>
            <img src="/img/male.png" width="60px"/>
          </div>
          <div className = "p-10 w-1/5 mx-0 my-auto" >
            <input type="number" placeholder="age" className="w-12 border"/>
          </div>
          <div className="flex flex-row w-2/5 p-10 mx-0 my-auto">
            <div className="flex flex-col mr-5">
              <div className="flex flex-row justify-between">
                <label for="abdominal"> Abdominal </label>
                <input type="text" id = "abdonminal" className = "w-1/5 border" />
              </div>
              <div className="flex flex-row justify-between mt-5" >
                <label for="thigh">Thigh</label>
                <input type="text" id ="thigh" className="w-1/5 border" />
              </div>
            </div>
            <div className = "flex flex-col" >
              <div className="flex flex-row justify-between" >
                <label for ="surpiliac"> Supriliac </label><input type="text" id="supriliac" className = "w-1/5 border"/>
              </div>
              <div className= "flex flex-row justify-between mt-5">
                <label for = "tricep" > Tricep </label><input type="text" id="tricep" className = "w-1/5 border "/>
              </div>
            </div>
          </div>
          <div className="w-1/5 mx-0 my-auto p-10" >
            <button className="bg-green p-2 text-white">Calculate</button>
          </div>
        </div>

        <h2 className="mt-8">Method 2: BMI</h2>
        <div className="flex">
          <div className="flex w-1/5 p-10 mx-0 my-auto">
            <img src = "/img/female.png" width = "60px" className="mr-6"/>
            <img src="/img/male.png" width="60px"/>
          </div>
          <div className = "p-10 w-1/5 mx-0 my-auto" >
            <input type="number" placeholder="age" className="w-12 border"/>
          </div>
          <div className="flex flex-row w-2/5 p-10 mx-0 my-auto">
            <div className="flex flex-col mr-5">
              <div className = "flex flex-row justify-between">
                <label for="weight">Weight</label>
                <input type="text" id="weight" className="w-1/5 border"/>
              </div>
              <div className = "flex flex-row justify-between mt-5" >
                <label for="height">Height</label>
                <input type="text" id="height" className="w-1/5 border"/>
              </div>
            </div>
          </div>
          <div className = "w-1/5 mx-0 my-auto p-10">
            <button className="bg-green p-2 text-white">Calculate</button>
          </div>
        </div>

        <h2 className="mt-8">Method 3: Tape Measure</h2>
        <div className="flex">
          <div className="flex w-1/5 p-10 mx-0 my-auto">
            <img src = "/img/female.png" width = "60px" className="mr-6"/>
            <img src="/img/male.png" width="60px"/>
          </div>
          <div className="p-10 w-1/5 mx-0 my-auto" >
            <input type="number" placeholder="age" className="w-12 border"/>
          </div>
          <div className="p-10 w-1/5 mx-0 my-auto" >
            <input type="number" placeholder="Weight" className="w-24 border"/>
          </div>
          <div className="flex flex-row w-1/5 p-10 mx-0 my-auto">
            <div className="flex flex-col mr-5">
              <div className="flex flex-row justify-between">
                <label for="wrist">Wrist</label>
                <input type="text" id="wrist" className="w-1/5 border" />
              </div>
              <div className="flex flex-row justify-between mt-5" >
                <label for="waist">Waist</label>
                <input type="text" id="waist" className="w-1/5 border" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <label for="hip"> Hip </label><input type="text" id="hip" className ="w-1/5 border"/>
              </div>
              <div className="flex flex-row justify-between mt-5">
                <label for="forearm">Forearm</label><input type="text" id="forearm" className="w-1/5 border"/>
              </div>
            </div>
          </div>
          <div className="w-1/5 mx-0 my-auto p-10" >
            <button className="bg-green p-2 text-white">Calculate</button>
          </div>
        </div>

      <p className="flex justify-center text-4xl">Body Fat:  <span className="ml-2 text-purple"> 24.2%</span></p>

      </div>
    )
  }
}

export default BodyFatCalc
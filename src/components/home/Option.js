import React, { useState } from 'react'


const Option = ({text, image, alt, link}) => {

  const [state, setState] = useState({hover: false})

  const updateState = () => {
    let newState = {...state}

    newState.hover = !newState.hover
    setState(newState)
    
  }
  console.log(`text: ${text} image: ${image}`)
  return (
        <div className="md:w-1/2 lg:w-1/5 p-10 lg:p-6 xxl:p-12">
          <div className={state.hover ? "option-highlight" : "option"}  onMouseEnter={ () => updateState() } onMouseLeave={() => updateState()}>
            <a href={link}><img src={image} alt={alt}/></a>
          </div>
          <p className="text-2xl text-center mt-6 text-black">{text}</p>
        </div>)
}

// class Option extends Component {
//   state = {
//     hover: true,
//     text:"test",
//     image:"/img/calculate.png"
//   }
//   hoverOn = (e) =>{
//     this.setState({ hover: true });
//     }
//   hoverOff = (e) =>{
//     this.setState({ hover: false });
//   };
  
//   render() {
//     return (
//         <div className="w-1/5 p-6">
//           <div className={this.state.hover ? "option-highlight" : "option"}  onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
//             <img src={this.state.image}/>
//           </div>
//           <p className="text-2xl text-center mt-6 text-black">{this.state.text}</p>
//         </div>
//         )
//   }
// }

export default Option
import React, { Component } from 'react'
import ContactMe from './ContactForm'

class Home extends Component {
  state = {
    showContact: false
  }

  closeContactForm = () => {
    this.setState({
      showContact: !this.state.showContact
    })
  }

  render() {
  return (
    <div>
      {this.state.showContact ? <ContactMe close={this.closeContactForm}/> : null}
      {/* Head visual */}
      <section>
        <div className="object-fit relative home-cover">
          {/* <img className="home-cover" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1589992833/homepage_cover.png" alt="kitchen surface"/> */}
          {/* <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w, ${xlarge} 3200w`} alt="Kitchen Surface"/> */}
          <div className="absolute transform-translate-center w-full md:w-4/5 lg:w-3/5 p-4">
            <h1 className="text-white text-4xl lg:text-5xl xxl:text-6xl home-hl">Struggling to eat healthily or exercise consistently? Let me help.</h1>
            <p className="text-white text:lg lg:text-xl mt-2">Together we can get results that last, with expert nutrition coaching and accountability from Natalie Howley and Precision Nutrition.</p>
            <button className="mt-6 primary" onClick={this.closeContactForm}>Contact Me</button>
            <p className="text-xs mt-2 text-white">From 50 €/month. Limited spots available.</p>
          </div>
        </div>
      </section>
      {/* Features details */}
      <section>
        <div className="p-2 lg:p-12">
          <h2 className="text-2xl lg:text-4xl text-center mt-4 ">Your Nutrition with Natalie</h2>
          <p className="text-center mt-2 lg:mt-0">To reach your goals, you'll need to be consistent. To be consistent, you'll need help.</p>
          <div className="features flex sm:flex-col lg:flex-row">
            <div className="feature flex lg:w-1/2">
              <img className="feature-img" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590420205/Cute%20Icons/heart_world.png"></img>
              <div className="feature-text">
                <p className="font-bold ">Lose weight, build strength, and have more energy.</p>
                <p>You tell me your goals. I’ll help you get there. In under one year, you’ll be in better shape than you ever thought possible.</p>
              </div>
            </div>
            <div className="feature flex lg:w-1/2">
              <img className="feature-img" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590420205/Cute%20Icons/talk.png"></img>
              <div className="feature-text">
                <p className="font-bold ">I'll help you stay accountable.</p>
                <p>I’ll provide you with daily support, guidance and accountability, every step of the way, no matter what life throws at you. We’re in this together.</p>
              </div>
            </div>
            <div className="feature flex lg:w-1/2">
              <img className="feature-img" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590420205/Cute%20Icons/chef.png"></img>
              <div className="feature-text">
                <p className="font-bold ">We'll make living healthy a habit.</p>
                <p>Most people who try to get in shape overload themselves and burn out quickly. Instead, I’ll help you focus on the small practices that lead to big results.</p>
              </div>
            </div>
            <div className="feature flex lg:w-1/2">
              <img className="feature-img" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590420205/Cute%20Icons/calendar.png"></img>
              <div className="feature-text">
                <p className="font-bold ">Busy? Let me do the thinking for you.</p>
                <p>You have enough to worry about already. Leave the nutrition and workout details to me while you breathe easy.</p>
              </div>
            </div>
            <div className="feature flex lg:w-1/2">
              <img className="feature-img" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590420205/Cute%20Icons/stars.png"></img>
              <div className="feature-text">
                <p className="font-bold ">Proven to work, 100,000 times over.</p>
                <p>We'll use the Precision Nutrition coaching method, developed by the world's top nutrition researchers and used by champion athletes to achieve lasting change. More on the evidence below.</p>
              </div>
            </div>
            <div className="feature flex lg:w-1/2">
              <img className="feature-img" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590420205/Cute%20Icons/coins.png"></img>
              <div className="feature-text">
                <p className="font-bold ">Affordable one-on-one coaching.</p>
                <p>At 50 €/month, personal coaching is finally affordable. And it just works. Why? Because I am committed to helping you get into the shape you want.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Meet your coach */}
      <section className="meet-coach">
        <div className="sm:p-2 lg:p-12 flex flex-col md:flex-row">
          <div className="md:w-1/2 coach-img">
            <img className="natalie" src="https://res.cloudinary.com/dnb2crtgo/image/upload/a_exif/v1590501243/natalie-howley.jpg"></img>
          </div>
          <div className="md:w-1/2 coach-info p-10">
            <h2 className="text-2xl lg:text-4xl text-center">Meet your coach, Natalie Howley</h2>
            <div className="mt-6">
              <p>Hello! I'm Natalie, a web developer by day, a dancer by night and a nutrition enthusiast always.</p><br/>
              <p>I focus on helping individuals to build healthy habits so that they can manage their fitness and nutrition in the long term and feel their best!</p>
              <img className="precision-badge mt-8 mb-8" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590501939/pn-badge.svg"/>
              <p className="font-bold">Areas of expertise</p>
              <p>Nutrition coaching, strength training, wellness</p><br/>
              <p className="font-bold">Locations served</p>
              <p>Online</p>
            </div>
          </div>
        
        </div>
      </section>
      {/* ProCoach video */}
      <section>
        <div className="p-2 mt-2 lg:p-12 lg:mt-0">
          <h2 className="text-2xl lg:text-4xl text-center max-w-3xl mt-2 lg:mt-0 vid-hl">Here's a sneak peek at how the Nutrition with Natalie program works with ProCoach</h2>
          <div className="w-full mt-12">
            <iframe className="precision-vid" src="https://player.vimeo.com/video/290803639" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
          <div className="program-details flex flex-col lg:flex-row lg:flex-wrap">
            <div className="highlight lg:w-1/2 p-4">
              <p className="font-bold">Easy-to-use online platform</p>
              <p>You’ll start by telling me all about yourself, including your goals, health challenges, and daily routine. From there, I’ll customize your entire program and we’ll start the proven 12-month coaching process.</p>
            </div>
            <div className="highlight lg:w-1/2 p-4">
              <p className="font-bold">Simple nutrition habits and daily check-ins</p>
              <p>Every day, you’ll get a lesson and a nutrition or lifestyle habit to practice. You can either read the daily lesson or listen to it like a podcast. We’ll practice a new nutrition habit every two weeks, with every lesson designed to help you get results.</p>
            </div>
            <div className="highlight lg:w-1/2 p-4">
              <p className="font-bold">Small yet powerful habits to improve everyday life</p>
              <p>Along with your nutrition habits, we’ll work together to create and practice healthy habits across every aspect of your life: from sleep and stress-management to movement and mindfulness. These new habits will help you feel more calm, confident, and prepared for each day—no matter what life throws at you.</p>
            </div>
            <div className="highlight lg:w-1/2 p-4">
              <p className="font-bold">Personal coaching and detailed progress checking</p>
              <p>I’ll check in with you frequently to see how you’re doing and to answer any questions you have. Also, you can message me whenever you need. The program also tracks everything from your measurements to your habits throughout the year, so you can see just how much progress you’ve made.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Is it right for you */}
      <section className="is-it-right">
        <div className="p-2 lg:p-12">
          <h2 className="text-2xl lg:text-4xl text-center mt-2 lg:mt-0">Is the Nutrition with Natalie program right for you?</h2>
          <p className="text-lg lg:text-2xl text-center mt-2 lg:mt-0">Personal coaching with Coach Natalie Howley and Precision Nutrition is for you if:</p>
          <div className="checklist flex flex-col p-4 lg:p-0">
            <div className="flex">
              <img className="purple-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_purple.png" />
              <div className="ml-4">
                <p className="font-bold">You want to get healthier, fitter, and stronger — and stay that way for the rest of your life</p>
                <p>This program is for people who want to lose weight and body fat, build physical strength and confidence, get results that last, and get off the diet roller-coaster once and for all. I won’t give you a crazy diet or exercise program to follow; instead, I’ll help you build habits that will get you results that last forever.</p>
              </div>
            </div>

            <div className="flex mt-4">
              <img className="purple-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_purple.png" />
              <div className="ml-4">
                <p className="font-bold">You’re tired of “quick fix” programs and are willing to dedicate 12 months to getting in shape the sustainable way</p>
                <p>If you’ve tried something before and “failed” — or just can’t stick with it — know that you’re not alone. And it’s not your fault. After all, self-directed training and nutrition programs fail 98 percent of the time. Not to mention, after many years in the fitness industry, I’ve seen dozens of diet and exercise fads come and go. That’s why I don’t follow fads. Instead, I’ll teach you doable daily actions that are designed to fit into a busy lifestyle. Bottom line: I’ll help you make fitness and nutrition a part of your life, without it taking over.</p>
              </div>
            </div>

            <div className="flex mt-4">
              <img className="purple-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_purple.png" />
              <div className="ml-4">
                <p className="font-bold">You want an expert to hold you accountable and keep you consistent through the program</p>
                <p>Nothing worth doing can be done alone. That’s why I work closely with my clients to help them eat well and exercise, no matter what other craziness is going on in their lives. You’re busy and have enough to worry about; let me take care of the fitness and nutrition details so you don’t have to.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="pricing">
          <div className="p-2 lg:p-12">
            <h2 className="text-4xl text-center mt-6 lg:mt-0">Pricing</h2>
            <div className="price-plans flex mt-12 justify-center flex-col md:flex-row">
              <div className="price-plan">
                <p className="text-3xl text-center">Nutrition Only</p>
                <p className="price text-center text-xl mt-4">€50/month</p>
                <div className="flex mt-4 items-center">
                  <img className="blue-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_blue.png"/>
                  <p className="ml-2">A personalized nutrition program and lifestyle coaching</p>
                </div>
                <div className="flex mt-2 items-center">
                  <img className="blue-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_blue.png"/>
                  <p className="ml-2">A 20 minute call with me each month and daily email contact</p>
                </div>
                <div className="flex mt-2 items-center">
                  <img className="blue-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_blue.png"/>
                  <p className="ml-2">Daily help with the habits you're working on</p>
                </div>
                <div className="flex mt-2 items-center">
                  <img className="blue-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_blue.png"/>
                  <p className="ml-2">Lessons and resources for each habit</p>
                </div>
                <div className="flex mt-2 items-center">
                  <img className="blue-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_blue.png"/>
                  <p className="ml-2">A place to track progress and see results</p>
                </div>
                <div className="flex mt-2 items-center">
                  <img className="blue-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_blue.png"/>
                  <p className="ml-2">More resources acording to your needs</p>
                </div>
                <div className="flex mt-2 items-center">
                  <img className="blue-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_blue.png"/>
                  <p className="ml-2">Delivered on a premium, easy-to-use platform you can take with you anywhere.</p>
                </div>
              </div>
              <div className="price-plan">
                <p className="text-3xl text-center">Nutrition and Exercise</p>
                <p className="price text-center text-xl mt-4">€80/month</p>
                <p className="mt-4">Everything in the Nutrition Only plan plus:</p>
                <div className="flex mt-4 items-center">
                  <img className="blue-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_blue.png"/>
                  <p className="ml-2">Personalized exercise plan that fits in with your current schedule, level of experience and physical abilities.</p>
                </div>
                <div className="flex mt-2 items-center">
                  <img className="blue-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_blue.png"/>
                  <p className="ml-2">Videos and explanations of each exercise in the gym or at home</p>
                </div>
                <div className="flex mt-2 items-center">
                  <img className="blue-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_blue.png"/>
                  <p className="ml-2">Easier and harder versions of each exercise to adjust to your level</p>
                </div>
                <div className="flex mt-4 items-center">
                  <img className="blue-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_blue.png"/>
                  <p className="ml-2">Workouts adjusted for injuries</p>
                </div>
                <div className="flex mt-4 items-center">
                  <img className="blue-check" src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590505694/check_blue.png"/>
                  <p className="ml-2">Help and advice from your coach on exercise plan</p>
                </div>
              </div>
             
            </div>
          </div>
          <div className="flex justify-center">
            <button className="primary mt-4 my-0 mx-auto pricing-contact" onClick={this.closeContactForm}>Contact Me</button>
          </div>
      </section>
      {/*  More nutrition with Natalie */}
      <section>
        <div className="p-2 lg:p-12">
        <h2 className="text-2xl lg:text-4xl text-center mt-4">More Nutrition with Natalie</h2>
          <div className="flex mt-10 flex-col md:flex-row md:flex-wrap more-nutr-info">
            <div className="flex md:w-1/2">
            <img src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590762884/Canva_-_Black_Frying_Pan_With_Spaghetti_Sauce_Near_Brown_Wooden_Ladle_and_Ripe_Tomatoes_ttljeh.jpg"/>
            </div>
            <div className="flex md:w-1/2 p-4 relative extras-1 more-nutr">
              <div className="flex-col w-2/3 absolute transform-translate-center text-center">
                <p className="text-lg lg:text-xl">Don't know where to start? Use this calculator to see how many calories, protein, carbs and fat you should be eating each day to reach your goal.</p>
                <a href="/macros">
                  <button className="primary hover:bg-green mt-6">Calculate</button>
                </a>
              </div>
            </div>
            <div className="flex md:w-1/2 p-4 relative extras-2 more-nutr">
            <div className="flex-col w-2/3 absolute transform-translate-center text-center">
                <p className="text-lg lg:text-xl">Need some recipe inspiration? Check out the Nutrition with Natalie recipes and start your nutrition journey today!</p>
                <a href="/recipes"><button className="primary hover:bg-green mt-6">Browse recipes</button></a>
              </div>
            </div>
            <div className="flex md:w-1/2">
              <img src="https://res.cloudinary.com/dnb2crtgo/image/upload/v1590762891/Canva_-_White_Ceramic_Mortar_and_Pestle_Beside_Book_kssby5.jpg"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
}

export default Home
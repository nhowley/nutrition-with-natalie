import React from 'react'
import Option from './home/Option'
import Feature from './home/Feature'

// let small = '/img/home_head-visual_MOBILE.jpg';
// const medium = '/img/home_head-visual_cropped_2.jpg';
// const large = '/img/home_head-visual_cropped_2.jpg';
// const xlarge = '/img/home_head-visual_cropped_2.jpg';

const Home = (props) => {
  return(
    <div>
      {/* Head visual */}
      <section>
        <div className="object-fit relative">
          <img src="/img/home_head-visual_cropped_2.jpg" alt="kitchen surface"/>
          {/* <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w, ${xlarge} 3200w`} alt="Kitchen Surface"/> */}
          <div className="absolute transform-translate-center w-full md:w-4/5 lg:w-2/5 p-4">
            <h1 className="text-white text-5xl xxl:text-6xl text-center">Meal plans made easy</h1>
            <div className="bg-white h-8 xxl:h-12 mt-3 flex justify-between mt-2">
                <p className="text-gray-400 py-1 xxl:py-3 px-4">Search our recipes</p>
                <div className="bg-teal h-8 xxl:h-12 w-1/6 relative">
                  <div className="absolute transform-translate-center">
                    <img src="/img/search-white.png" className="ml-2 w-1/2" alt="search"/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section>
        <div className="flex p-10 flex-col md:flex-row flex-wrap">
          <Option text="Calculate your daily nutritional needs" image="/img/calculate.png" alt="Calculator"/>
          <Option text="Find recipes from our database" image="/img/database.png" alt="Database"/>
          <Option text="Add your own recipes from any source" image="/img/recipe.png" alt="Recipe" link="/add"/>
          <Option text="Create a meal plan" image="/img/meal-plan.png" alt="Meal Plan"/>
          <Option text="Write your shopping list" image="/img/shopping-list.png" alt="Shopping List"/>
         </div>
      </section>
      {/* Features details */}
      <section>
        <div className="bg-gray-200 p-12">
          <Feature 
          image="img/calculator.png" 
          heading="Calculate your daily nutritional needs"
          text="Enter a few details about yourself and your fitness goals and we will calculate how many calories
          you should be eating per day to achieve your goal: whether that's to lose fat, tone up, build muscle or maintain muscle.
          We go one step further and also calculate the amount of carbohydrates, fat and protein these calories should be split into
          so that you can make sure you're eating the right foods." 
          />
          <Feature 
          image="img/magnifying-glass.png" 
          heading="Find recipes from our database"
          text="Search our recipes to find high protein meals to include as part of your diet. Filter by meal,
                ingredient or dietary requirements." 
          />
          <Feature 
          image="img/recipe-book.png" 
          heading="Add your own recipes from any source"
          text="You can add recipes from any source to your online recipe book with our app. Add by URL, import a word
                document or take a photo of any recipe, either typed or handwritten and our technology will convert the
                text and add it to your recipe library. You can have all recipes in one place!" 
          />
          <Feature 
          image="img/calendar.png" 
          heading="Create a meal plan"
          text="Choose any recipe from our database or your recipes and add it to your weekly meal plan. We will sum up
                the calories, protien, carbohydrates and fat in all your meals so that you can see if you are reaching
                your daily target with your planned meals. We will also suggest some ways to adjust the recipes if you
                are not quite at your target!" 
          />
          <Feature 
          image="img/checklist.png" 
          heading="Write your shopping list"
          text="Add some or all of the ingredients from your recipes to your shopping list on our app, and edit the
                quantities as you need to, making it easy to know what you need to buy on your next food shop!" 
          />
        </div>
      </section>
      {/* Calculate Daily Intake */}
      <section>
        <div className="relative p-20">
          <a href="/macros">
            <button className="bg-purple text-white py-1 px-4 xxl:p-6 xl:text-xl  absolute transform-translate-center hover:bg-green">Calculate your recommended daily intake</button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
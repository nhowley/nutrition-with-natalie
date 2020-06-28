import React from 'react'
import '../../index.css';
import FooterLink from './FooterLink'
import FooterSocialMedia from './FooterSocialMedia'

const Footer = () => {
return(
  <footer className="flex items-center justify-between flex-wrap items-end bg-teal p-6 mb-0 mt-8">
    <div className="w-full block flex-grow lg:flex lg:items-center  lg:w-auto relative text-center mx-auto my-0">
      <div className="text-sm lg:flex-grow flex justify-center justify-around flex-col lg:flex-row ">
        <p className="block mt-4 xl:text-xl  lg:inline-block lg:mt-0 text-white hover:text-white mr-6 no-underline">
          @2020 Nutrition with Natalie
        </p>
        <FooterLink link="/terms" text="Terms of service"/>
        {/* <FooterLink link="/data" text="Data Policy"/> */}
        <FooterLink link="/privacy-policy" text="Privacy Policy"/>
        {/* <FooterLink link="/about" text="About Us"/>
        <FooterLink link="/contact" text="Contact Us"/>
        <FooterLink link="/blog" text="Blog"/> */}
        <div className="my-0 flex justify-center">
          <FooterSocialMedia link="https://www.facebook.com/nutritionwithnataliehowley" image="/img/facebook-white.png"/>
          <FooterSocialMedia link="https://www.instagram.com/nutrition_withnatalie/" image="/img/instagram-white.png"/>
        </div>
      </div>
    </div>
  </footer>
)
}

export default Footer
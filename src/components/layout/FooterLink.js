import React from "react";

const FooterLink = ({link, text}) => (

  <a href={link} className="block mt-4 xl:text-xl lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-6 no-underline">
    {text}
  </a>

);

export default FooterLink;
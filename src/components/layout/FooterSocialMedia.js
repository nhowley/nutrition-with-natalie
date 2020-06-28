import React from "react";

const FooterSocialMedia = ({link, image}) => (

  <a href={link} className="block mt-4 mx-2 lg:inline-block lg:mt-0 text-white hover:text-white no-underline">
    <img src={image} width="20px" alt="social icon"/>
  </a>

);

export default FooterSocialMedia;
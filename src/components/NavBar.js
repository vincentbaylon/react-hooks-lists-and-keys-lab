import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksArr = links.map((eachLink) => {
    return <a key={eachLink} href={'#' + eachLink}>{eachLink}</a>
  })

  return <nav>{linksArr}</nav>;
}

export default NavBar;

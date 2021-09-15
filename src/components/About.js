import React from "react";
//import Links from "./Links.js"

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links /*github={props.github} linkedin={props.linkedin}*//>
    </div>
  );
}
function Links(props){
  return (
    <React.Fragment>
      <h3>"Links"</h3>
      <a href={props.github}>GitHub</a>
      <a href={props.linkedin}>LinkedIn</a>
    </React.Fragment>
  )
}

export default About;

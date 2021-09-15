import React from "react";
import Links from "./Links.js"
import user from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {maybeRender(props)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

function maybeRender(props){
  const hasBio = props.bio;
  if(hasBio){
    return <p>{hasBio}</p>
  }
  else{
    return ""
  }
}

export default About;

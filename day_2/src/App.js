import { EnvelopeAt } from "react-bootstrap-icons"
import { Linkedin } from "react-bootstrap-icons"
import { Facebook } from "react-bootstrap-icons"
import { Twitter } from "react-bootstrap-icons"
import { Instagram } from "react-bootstrap-icons"
import { Github } from "react-bootstrap-icons"
function Info(){
  return(
    <>
      <img src="image.jpg" alt="profil photo"></img>
      <div className ="info"><br/>
        <h2>Daniel Katoto</h2>
        <small>Frontend Developper</small>
        <br/><br/>
        <button className="btn bg-primary"><EnvelopeAt /> Email </button>
        <button className="btn bg-info"><Linkedin/>LinkIn</button>
      </div>
    </>
  )
}
function About(){
  return(
    <>
      <div className="text-start about">
        <h2 className="mt-2">About</h2>
        <p>I am a student at cavendish university Uganda,
          I am studying Software Engineering, third year, 
          semester one, I am currently learning 
          react.js
        </p>
      </div>
      
    </>
  )
}
function Interests(){
  return(
    <>
      <div className="text-start interests">
        <h2>Interests</h2>
        <p>I am interesting in web development and data science</p>
      </div>
      
    </>
  )
}
function Footer(){
  return(
    <>
      <div className="mb-4">
        <a href=""><Twitter size={25}/></a>
        <a href=""><Github size={25}/></a>
        <a href=""><Instagram size={25}/></a>
        <a href=""><Facebook size={25}/></a>
      </div>
      
      
    </>
  )
}
export {Info, About, Interests, Footer}

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index'

export default class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email : "",
      password:"",
      passwordConfirmation: "",
      newsletter: false

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmition = this.handleSubmition.bind(this)
  }
  handleChange = (event) =>{
    const {name} = event.target
    this.setState({[name]: [name] == 'newsletter' ? event.target.checked : event.target.value })
  }
  handleSubmition = (event) =>{
    event.preventDefault()
    this.props.sub(this.state)
    this.setState({
      email : "",
      password:"",
      passwordConfirmation: "",
      newsletter: false
    })
  }
  render(){
    return(
      <>
        <form className='container pt-4 '>
            <h3 className='text-center'>Simple form input</h3>
          <div>
            <label htmlFor='email' className='fs-4'>Enter Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={this.state.email}
              onChange ={this.handleChange}
              className = "form-control mt-2 mb-3"
            />
          </div>
          <div>
            <label htmlFor='password' className='fs-4'>Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={this.state.password}
              onChange ={this.handleChange}
              className = "form-control mt-2 mb-3"
            />
          </div>
          <div>
            <label htmlFor='passwordConfirmation' className='fs-4'> 
                Confirm your Password
            </label>
            <input 
              type="password" 
              id="passwordConfirmation" 
              name="passwordConfirmation" 
              value={this.state.passwordConfirmation}
              onChange ={this.handleChange}
              className = "form-control mt-2 mb-3"
            />
          </div>
          <div className='container'>
            <input 
              type="checkbox" 
              id='newsletter' 
              name='newsletter'
              checked={this.state.newsletter}
              onChange ={this.handleChange}
              className='me-2'
            />
            <label className='fs-4 subText' htmlFor='newsletter'>Suscribe to the newsletter</label>
          </div>

          <button type='submit' 
          onClick={this.handleSubmition}
          className="btn btn-secondary px-3 my-2"
          >
            Submit
            </button>
        </form>
      </>
    )
  }
}
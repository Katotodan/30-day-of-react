import React from 'react'

export default class Input extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            guitarName: "",
            guitarMarker: ""
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubimition = this.handleSubimition.bind(this)
    }
    handleClick = (e) =>{
        this.setState({guitarName: e.target.value })
    }
    handleSelect = (e) =>{
        this.setState({guitarMarker: e.target.value})
    }
    handleSubimition = (e) =>{
        e.preventDefault()
        this.props.add(this.state.guitarName, this.state.guitarMarker)
        this.setState({guitarName:"" , guitarMarker:""})
    }
    render(){
        return(
            <>
            <form>
                <div>
                    <label>Guitar name</label>
                    <input type='text' value={this.state.guitarName} onChange={this.handleClick} />
                </div>
                <div>
                    <label>Select gutiar's marker</label>
                    <select value={this.state.guitarMarker} onChange={this.handleSelect}>
                        <option></option>
                        <option value="RTV">RTV</option>
                        <option value="RTE">RTE</option>
                        <option value="RTT">RTT</option>
                        <option value="RSS">RSS</option>
                    </select>
                </div>
                <button type='submit' onClick={this.handleSubimition}>Add</button>
            </form>  
            </>
        )
    }
}
import React from "react"

export class Inputs extends React.Component{
    constructor(props){
        super(props)
        this.state = {textUp:"", textDown:""}
    }
    displayTextUp = async (e)=>{
        this.props.text_up(e.target.value)
    }
    displayTextDown = (e)=>{
        this.props.text_down(e.target.value)
    }
    imgHandle =() =>{
        this.props.changeImg()
    }
    render(){

        return(
            <>
                <form>
                    <div>
                        <label>Top text</label><br/>
                        <input type="text" onChange={this.displayTextUp} />
                    </div>
                    <div>
                        <label>Bottom Text</label><br/>
                        <input type="text" onChange={this.displayTextDown}/>
                    </div>
                </form>
                <div className="btn--parent" onClick={this.imgHandle}>
                    <button>Render New Image</button>
                </div> 
                
            </>
        )
    }
}

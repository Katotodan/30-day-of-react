import React from 'react'
export class ImageViewer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <div className='imgContainer'>
                    <h4 className='upText'>{this.props.upText}</h4>
                    <img src={this.props.imgUrl} alt=""className='imgae--viewer' />
                    <h4 className='bottomText'>{this.props.bottomText}</h4>
                </div>
                
            </>
        )
    }
}
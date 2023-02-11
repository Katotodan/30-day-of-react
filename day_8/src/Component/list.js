import React from "react";
export default class List extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let styles ={
            RTV:{
                color: 'red',
                backgroundColor: 'black'
            },
            RTE:{
                color: 'white',
                backgroundColor: '#0cc'
            },
            RTT:{
                color: 'yellow',
                backgroundColor: '#0fc'
            },
            RSS:{
                color: '#ccc',
                backgroundColor: '#0ec'
            }
        }
        let list = this.props.lists.map((el, index) => {
            return(
                <div key={index} style={styles[el.mark]}>
                    <li>{el.name}</li>
                    <p>{el.mark}</p>
                </div>
            )  
        })
        
        return(
            <>
                <h4>List</h4>
                {list}
                
            </>
        )
    }
}
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowClockwise } from "react-bootstrap-icons";

export default class ExchangeRate extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="exchange--rate">
                <h3>Exchange</h3>
                <div className="exchange--value">{this.props.display ==='hide' && <p>
                    {this.props.inValue} {this.props.inCurrency} 
                    is equal to {this.props.outValue} {this.props.outCurrency}
                    </p>}
                </div>
                <div>{this.props.display ==='view' && <p className="turn"><ArrowClockwise/></p>}
                </div>
                
            </div>
        )
    }
}
import React from "react";
import ExchangeRate from "./exchangeRate";
import axios from 'axios'

export default function CurrencyConverter() {
    const [inputValue, setInputValue] = React.useState(0)
    const [outputValue, setOutputValue] = React.useState(0)
    const [select1Value, setOelect1Value] = React.useState('USD')
    const [select2Value, setSelect2Value] = React.useState('EUR')
    const [loaderHider, setLoaderHider] = React.useState('hide')
    // const convert = () =>{
    //     setLoaderHider('view')
    //     const options = {
    //     method: 'GET',
    //     url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
    //     params: {
    //         have: select1Value , 
    //         want: select2Value, 
    //         amount: inputValue
    //     },
    //     headers: {
    //         'X-RapidAPI-Key': '773f5cfff4msh853fd382951c944p1c020djsn743c978f64b1',
    //         'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
    //     }
    //     };

    //     axios.request(options).then(function (response) {
    //         setLoaderHider('hide')
    //         setOutputValue(response.data.new_amount)          
            
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }
    const convert = () =>{
        if(inputValue){
            setLoaderHider('view')
            axios.get(
            `http://localhost:3500?inValue=${inputValue}&current1=${select1Value}&current2=${select2Value}`)
                .then(function (response) {
                setLoaderHider('hide')
                setOutputValue(response.data)
                })
                .catch(function (error) {
                // handle error
                console.log(error);
                })
        }
         
    }

    const handleChange = (event) =>{
        if(event.target.type === 'number'){
            setInputValue(event.target.value)
            setLoaderHider(null)
            setOutputValue(0)
        }else{
            if(event.target.className === 'select--one'){
                setOelect1Value(event.target.value)
            }else{
                setSelect2Value(event.target.value)
            }
        } 
    }

    const option = ['USD','EUR'].map((element, index) => {
        return( <option key={index} value={element}>{element}</option>)
    })

    return(
        <div className="current-conv">
            <h2>Currency converter</h2>
            <div className="table--container">
                <table>
                    <tbody>
                        <tr>
                            <td>Primary Currency</td>
                            <td> 
                                <input 
                                type='number' 
                                value={inputValue} 
                                onChange={handleChange}
                                
                                className="select--one"
                                />
                            </td>
                            <td>
                                <select 
                                className="select--one"
                                value={select1Value}
                                onChange={handleChange}
                                >
                                    {option}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Secondary Currency</td>
                            <td> 
                                <input 
                                type='number' 
                                disabled={true}
                                value={outputValue}
                                className="select--two"
                                />
                            </td>
                            <td>
                                <select
                                className="select--two"
                                value={select2Value}
                                onChange={handleChange}
                                >
                                    {option}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
                
            <button onClick={convert}>
                Convert
            </button>
            < ExchangeRate 
                inValue={inputValue} 
                inCurrency={select1Value} 
                outValue={outputValue} 
                outCurrency={select2Value}
                display = {loaderHider}
            />
        </div>
    )
}
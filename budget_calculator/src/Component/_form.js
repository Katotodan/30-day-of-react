import {AiOutlineSend} from "react-icons/ai"

 export default function FormElmt (
    {formSubmition,handleCharge,charge,amount}){
    return(
        <form onSubmit={formSubmition}>
            <div className="form--container">
                <div>
                    <label htmlFor="charge">Charge</label><br/>
                    <input 
                        type="text" 
                        id="charge" 
                        name="charge"
                        placeholder="e.g. Rent"
                        value={charge}
                        onChange={handleCharge}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label><br/>
                    <input 
                        type="number" 
                        id="amount" 
                        name="amount"
                        placeholder="e.g. 100"
                        value={amount}
                        onChange={handleCharge}
                    />
                </div>
            </div>
            
            <button type="submit"> Submit <AiOutlineSend/></button>
        </form>
    )
 }
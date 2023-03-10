export default function AlertMsg({view, text,backgroundColor}){
    return(
        <div className="alert-container">
            {!view && <div className={`alert--msg ${backgroundColor}`}>{text}</div> }
        </div>
        
        
    )
}
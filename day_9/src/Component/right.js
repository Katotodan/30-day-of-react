

import NewData from "./newData";
import Welcome from "./welcome";
export default function Header (props){
    return(
        <div className="right--container">
            <h2 className="word--game--title">Word Game</h2>
            <Welcome/>
            <NewData questionData={props.questionData}/>
        </div>
    )
}

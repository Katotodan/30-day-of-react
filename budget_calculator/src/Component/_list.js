import {AiFillEdit} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai"

export default function ListItem ({list, deleteAll, deleteOne, edit}){
    let item = list.map((item, index )=>{
        return(
            <div key={index}>
                <li>
                    <div>{item.name}</div>
                    <div>${item.amount}</div>
                    <div className="list--icons">
                        <span onClick={()=> edit(item.id)}> 
                            <AiFillEdit/>
                        </span>
                        <span onClick={() =>deleteOne(item.id)}> 
                            <AiFillDelete className="delete--btn"/>
                        </span>
                    </div>
                </li>
                <hr/>
            </div>
            
        )
    })
    return(
        <div>
            {item}
            {list.length>0 &&
            <button 
                className="clean--all"
                onClick={deleteAll}
            >Clean All <AiFillDelete/></button>
            }
            
        </div>
    )
}
import React, {useState} from "react";
import {v4 as uuid } from "uuid"
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () =>{
    const initial_state =[]
const [boxes, setBoxes] = useState(initial_state)
const addBox =(newBox) =>{
    setBoxes(boxes =>[...boxes,{id:uuid(),...newBox}])
}
const removeBox =(id) =>{
    setBoxes(boxes=>boxes.filter(box =>box.id !==id))
}
return (
    <> 
    <div>
    <NewBoxForm addBox={addBox} />
    
    </div>
    
    <div>
        {boxes.map(box => 
        <Box 
        backgroundColor={box.backgroundColor} 
        height={box.height} 
        width={box.width}
        id= {box.id}
        key={box.id}
        removeBox={removeBox}/>)}
    </div>
    </>
)
}
export default BoxList
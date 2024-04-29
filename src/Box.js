import React from "react";

const Box = ({height,width,backgroundColor,id,removeBox}) =>{
return(
        <div>
        <div style={{backgroundColor,height,width}} id={id} key={id}></div>
        <button onClick={()=>removeBox(id)}>Remove {backgroundColor}Box</button>
        </div>
    )
}

export default Box
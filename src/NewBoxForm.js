import React, { useState } from "react";

const NewBoxForm =({addBox}) =>{
const initial_state={
    height:"",
    width:"",
    backgroundColor:""
}
const [formData ,setFormData] = useState(initial_state)
const handleChange = (e) =>{
    const {name,value} = e.target
    setFormData(formData =>({
        ...formData,
        [name]:value
    }))
}
const handleSubmit = (e) =>{
    e.preventDefault()
    addBox({...formData})
    setFormData(initial_state)
}

return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="height">Height</label>
        <input
        type="text"
        name="height"
        placeholder="height"
        value={formData.height}
        id="height"
        onChange={handleChange}></input>

        <label htmlFor="width">Width</label>
        <input
        type="text"
        name="width"
        placeholder="width"
        value={formData.width}
        id="width"
        onChange={handleChange}></input>

        <label htmlFor="backgroundColor">Background Color</label>
        <input
        type="text"
        name="backgroundColor"
        placeholder="backgroundColor"
        value={formData.backgroundColor}
        id="backgroundColor"
        onChange={handleChange}></input>

        <button>Add Box</button>
    </form>

    
)
}

export default NewBoxForm
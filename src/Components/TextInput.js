import React, { useState } from 'react'

function TextInput() {
    const [inputValue, setInputValue] = useState("placeholder") 
    const handlechange = (event)=>{ setInputValue(event.target.value)}
        return (
        <div>
            <p>
                {inputValue}
            </p>
            <input
            type="text"
            value={inputValue}
            onChange ={e=>handlechange(e)}>
            </input>
            <ul>
                
            </ul>
        </div>
    )
}

export default TextInput
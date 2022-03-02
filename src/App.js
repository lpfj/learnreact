import { useState } from 'react';
import './App.css';


function TextInput(props) {
  const {inputValue, setInputValue, list, setList} = props
  const handlechange = (event)=>{setInputValue(event.target.value)}
  const handleSubmit = (event)=>{
      event.preventDefault();
      setList([...list, inputValue ])
      }
      
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
          <button onSubmit={(e)=>handleSubmit(e)}>
            add to list
          </button>
      </div>
  )
}


function App() {
  const [inputValue, setInputValue] = useState("placeholder") 
  const [list, setList] = useState(["sdf" , "sdffsdf", "dfsdfsd"])
  const title = "hello world"

  console.log(list)
  return (
    <div className="App">
      <h1>{title}</h1>

      <TextInput inputValue={inputValue} setInputValue={setInputValue} list={list} setList={setList} />
      {list.length > 0 ? list.map((element, index)=><li key={index}>{element} <button >{index}</button></li>) : null}
    </div>
  );
}

export default App;

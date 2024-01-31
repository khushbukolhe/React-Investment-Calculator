
import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
import { useState } from "react";



function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:200000,
    expectedReturn:300000,
    duration:4
})

const HandleChange =(props)=>{
    setUserInput({
        ...userInput,
        [props.target.name]: +props.target.value
    })
}

const isDurationValid = userInput.duration>=1

  return (
    <><Header /><UserInput userInput={userInput} onChange={HandleChange}/>
    {isDurationValid?<Results userInput={userInput}/>:<p style={{textAlign:'center'}}>Please enter valid duration</p>}
    
    </>
  );
}

export default App;

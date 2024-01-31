
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
  return (
    <><Header /><UserInput userInput={userInput} onChange={HandleChange}/><Results userInput={userInput}/></>
  );
}

export default App;



const UserInput =({userInput, onChange})=>{

    return(
        <section id="user-input">
            <div className="input-group">
                <p>

                <label>Initial Investment</label>
                <input type='number' value={userInput.initialInvestment} name="initialInvestment" onChange={onChange} required></input>
                </p>
                <p>
                
                <label>Annual Investment</label>
                <input type='number' value={userInput.annualInvestment} name="annualInvestment" onChange={onChange} required></input>
                </p>
            </div>
            <div>
                <p>
               
                <label>Expected Return</label>

                <input type='number' value={userInput.expectedReturn} name="expectedReturn" onChange={onChange} required></input>
                </p>
                <p>
                <label>Duration</label>

                <input type='number' value={userInput.duration} name="duration" onChange={onChange} required></input>
                </p>
            </div>
        </section>
    );
}

export default UserInput;
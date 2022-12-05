import React from "react"

const Joke = ({setup, punchline}) => {
    const joke1 = () => {
        if (setup===undefined) return punchline;
        else return setup;
    }
    const joke2 = () => {
        if(setup===undefined) return ''; 
        else return punchline;   
    }
    const checkForSetup = () => {
        if(setup===undefined) return "jokeCardNoSetup";
        else return "jokeCard"
    }
    return(

        <div className={checkForSetup()}>
            <h1>{joke1()}</h1>
            <h3 className="punchline">{joke2()}</h3>
        </div>
    )
}

export default Joke;
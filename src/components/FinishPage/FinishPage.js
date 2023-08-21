import React from "react";
import ResultMessege from "../ResultMessege/ResultMessege";
import { resetGame, } from "../../store/TicTacStore/TicTacStore.ts";

const FinshPage = () => {

   const onRestart = () =>  {
        resetGame();
    }
    return (
        <div>
            <ResultMessege />
            <button onClick={onRestart}>Restart</button>
        </div>
        
    )
};

export default FinshPage;
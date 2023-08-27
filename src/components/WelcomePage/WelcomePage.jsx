
import React from "react";
/* import { $firstPlayerInfo, changeFirstPlayer } from "../../store/PlayerStore/PlayerStore.ts";
import { useStore } from "effector-react"; */
import { changeStatus } from "../../store/TicTacStore/TicTacStore.js";

const WelcomePage = () => {
    //const player = useStore($firstPlayerInfo)
    //const turn = useStore($currentPlayersTurn);
   // changePlayerTurn('O')
    //  <input type = "text"placeholder="Enter your name" /*onChange={changeFirstPlayer}*/></input> s
    //const a = [1,2,3,4,5];
    return(
            <button onClick={changeStatus}> Start </button>
    
    );
};

export default WelcomePage;
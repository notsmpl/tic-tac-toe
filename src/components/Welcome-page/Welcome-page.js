
import React from "react";
/* import { $firstPlayerInfo, changeFirstPlayer } from "../../store/PlayerStore/PlayerStore.ts";
import { useStore } from "effector-react";
import { $currentPlayersTurn, changePlayerTurn } from "../../store/TicTacStore/TicTacStore.ts";

 */
const WelcomePage = () => {
    //const player = useStore($firstPlayerInfo)
    //const turn = useStore($currentPlayersTurn);
   // changePlayerTurn('O')
    
    //const a = [1,2,3,4,5];
    return(
        <div>
            <input type = "text"placeholder="Enter your name" /*onChange={changeFirstPlayer}*/></input>
            <button /*onClick={}*/>Send</button>
            {/*a.map((value,idx)=>(<p>{value}</p>))*/}
        </div>
    );
};

export default WelcomePage;
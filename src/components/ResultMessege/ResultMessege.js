import React from "react";
import { useStore } from "effector-react";
import { $result } from "../../store/TicTacStore/TicTacStore.ts";

const ResultMessege= () => {
    const result = useStore($result)

        if(result.state === 'Win'){
            return (
                <p>Победил {result.winner}</p>
           )
        }
        if (result.state === 'Tie') { 
            return <p>Ничья</p>
        }  

};

export default ResultMessege;
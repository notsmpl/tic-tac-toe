import {$currentPlayersTurn, 
    $tictacfeild, 
    changeResult, 
    winCondition,
    changeStatus} from "../../store/TicTacStore/TicTacStore.ts";
import { useStore } from "effector-react";
import {useEffect} from "react";

const useTicTacToe = () => {
    const feild = useStore($tictacfeild);
    const turn = useStore($currentPlayersTurn);

    useEffect (() => {
            chekWin();
            chekIfTie();
    }, [feild]);

    const chekWin = () => {
        winCondition.forEach((currentPattern) => {
            const firstPlayer = feild[currentPattern[0]];
            if (firstPlayer === '') return
            let foundedWiningPattern = true;
            currentPattern.forEach((idx) => {
                if(feild[idx] !== firstPlayer){
                    foundedWiningPattern = false
                }
            });

            if (foundedWiningPattern) {
                changeResult({winner: firstPlayer ,state: 'Win'}) 
                changeStatus();
            }
        })
    };

    const chekIfTie = () => {
        let filled = true;
        feild.forEach((square) => {
            if(square === '') {
                filled = false
            }
        })
        if (filled) { 
            changeResult({winner: 'No One', state: 'Tie'})
            changeStatus()
        }
    };
    
   

    return {feild, turn}
}

export default useTicTacToe;
    
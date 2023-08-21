import React, { useEffect } from "react";
import Square from "../../styles/TicTacBoard/Square";
import {$currentPlayersTurn, 
        $tictacfeild, 
        changeResult, 
        changePlayerTurn, 
        updateBoard,
        winCondition,
        changeStatus} from "../../store/TicTacStore/TicTacStore.ts";
import { useStore } from "effector-react";

const SquareFeild = ({value,id}) =>{
    
    const feild = useStore($tictacfeild);
    const turn = useStore($currentPlayersTurn);

    useEffect (() => {
            chekWin();
            chekIfTie();
            changePlayer();
    }, [feild]) ;
    
    const changePlayer = () => {
            if (turn === 'X'){
                changePlayerTurn('O')
            }
            else changePlayerTurn('X')
    };


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
                changeResult({winner: turn ,state: 'Win'}) 
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
    
    const onClick = (id) => {
        const updatedBoard = feild.map((value,idx)=>{
            if(idx===id && value ===''){
                return turn
            }
            else return value
        })
        updateBoard(updatedBoard);
        
             
    };


    return(
        <Square id={id} onClick={() => onClick(id)}>{value}</Square>
    );
};

export default SquareFeild;
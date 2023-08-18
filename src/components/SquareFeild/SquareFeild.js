import React from "react";
import Square from "../../styles/TicTacBoard/Square";
import { $currentPlayersTurn, $tictacfeild, changePlayerTurn, updateBoard } from "../../store/TicTacStore/TicTacStore.ts";
import { useStore } from "effector-react";

const SquareFeild = ({value,id}) =>{
    const feild = useStore($tictacfeild);
    const turn = useStore($currentPlayersTurn)

    const changePlayer = () => {
            if (turn === 'X'){
                changePlayerTurn('O')
            }
            else {
                changePlayerTurn('X')
            }
    };
    const onClick = (id) => {
        const updatedBoard = feild.map((value,idx)=>{
            if(idx===id && value ===''){
                return turn
            }
            else return value;
        })
        changePlayer();
        updateBoard(updatedBoard);
        
    }
    return(
        <Square id={id} onClick={() => onClick(id)}>{value}</Square>
    );
};

export default SquareFeild;
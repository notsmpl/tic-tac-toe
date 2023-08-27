import React from "react";
import Square from "../../styles/TicTacBoard/Square";
import {
        updateBoard,
        changePlayerTurn
    } from "../../store/TicTacStore/TicTacStore.ts";
import useTicTacToe from "../hooks/useTicTacToe";

const SquareFeild = ({value,id}) =>{

    const {feild, turn} = useTicTacToe();

    const changePlayer = () => {
        if (turn === 'X'){
            changePlayerTurn('O')
        }
            else changePlayerTurn('X')
        };

    const onClick = (id,turn) => {
          if(feild[id] === ''){
              updateBoard({id,turn});
              changePlayer();
          }
      };

    return <Square id={id} onClick={() => onClick(id,turn)}>{value}</Square>
};

export default SquareFeild;
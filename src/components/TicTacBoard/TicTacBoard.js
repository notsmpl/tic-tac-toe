import React from "react";
import Board from "../../styles/TicTacBoard/Board";
import { useStore } from "effector-react";
import { $tictacfeild } from "../../store/TicTacStore/TicTacStore.ts";
import SquareFeild from "../SquareFeild/SquareFeild";

const TicTacBoard = () => {
    const feild = useStore($tictacfeild);
    return(
        <Board>
            {feild.map((value,idx)=>(<SquareFeild id={idx} value ={value}/>))}
        </Board>
    );
};

export default TicTacBoard;
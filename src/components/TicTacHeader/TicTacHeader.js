import { useStore } from "effector-react";
import React from "react";
import { $currentPlayersTurn } from "../../store/TicTacStore/TicTacStore.ts";
import Header from "../../styles/Header/Header.jsx";

const TicTacHeader = () => {
    const player = useStore($currentPlayersTurn);

    return(
        <Header>Ходит : {player}</Header>
    )

};

export default TicTacHeader;
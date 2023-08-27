import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { $status } from "../../store/TicTacStore/TicTacStore.ts";
import Theme from "../../styles/Theme/Teme.jsx";
import TicTacHeader from "../TicTacHeader/"
import Container from "../../styles/Container/Container";
import TicTacBoard from "../TicTacBoard";
import GameFieldContainer from "../../styles/Container/GameFieldContainer";
import FinshPage from "../FinishPage";

const App = () =>{
    const statusOfGame = useStore($status)

    return(
        <Theme>
            <Container>
                {/* <WelcomePage /> */}
                { statusOfGame && 
                    <GameFieldContainer>
                        <TicTacHeader />
                        <TicTacBoard />
                    </GameFieldContainer>
                }
                {!statusOfGame && <FinshPage />}
            </Container>
        </Theme>
    );
};

export default App;

import React from "react";
import WelcomePage from "../Welcome-page";
import Theme from "../../styles/Theme/Teme";
import Container from "../../styles/Container/Container";
import TicTacBoard from "../Tic-tac-board/TicTacBoard";

const App = () =>{
    return(
        <Theme>
            <Container>
                {/*<WelcomePage />*/}
                <TicTacBoard />
            </Container>
        </Theme>
    );
};

export default App;

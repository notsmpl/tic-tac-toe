import React from "react";
import ResultMessege from "../ResultMessege/ResultMessege";
import { resetGame, } from "../../store/TicTacStore/TicTacStore.ts";
import { Button} from 'antd';
import { styled } from "styled-components";

const FinishBox = styled.div`
    width:400px;
    height:400px;
    display: flex;
    flex-direction:column;
    align-items:center;    
`

const FinshPage = () => {

   const onRestart = () =>  {
        resetGame();
    }
    return (
        <FinishBox>
            <ResultMessege />
            <Button type="primary" danger onClick={onRestart}>
                Restart
            </Button>
        </FinishBox>
        
    )
};

export default FinshPage;
import React from "react";
import { useStore } from "effector-react";
import { $result } from "../../store/TicTacStore/TicTacStore.ts";
import { styled } from "styled-components";
import img from "../../img/trophy-1.1s-79px.png"


const Messege = styled.p`
    padding:25px;
    color: white;
    font-size:25px;

    & p{
        display:flex;
        align-items:center;
    }
`
const ResultMessege = () => {
    const result = useStore($result)

        if(result.state === 'Win'){
            return (
                <Messege>
                    <p>
                        Победил! {result.winner} 
                        <img src={img}></img>
                    </p>
                    
                </Messege>
           )
        }
        if (result.state === 'Tie') { 
            return <Messege>Ничья</Messege>
        }  

};

export default ResultMessege;
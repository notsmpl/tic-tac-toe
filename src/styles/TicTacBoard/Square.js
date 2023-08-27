import { styled } from "styled-components";



const Square = styled.div`
    height:198px;
    width:198px;
    border:1px solid black;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;

    &:hover{
        background-color: lightgray;
    };
    
`
export default Square;
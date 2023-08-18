import {createStore,createEvent} from 'effector'

export const updateBoard = createEvent<string>();
export const changePlayerTurn = createEvent<string>();
export const resetGame = createEvent();


export const $tictacfeild = createStore<Object>(["","","","","","","","",""])
    .on(updateBoard,(state,payload)=> payload)
    .reset(resetGame);

export const $currentPlayersTurn = createStore<string>("X")
    .on(changePlayerTurn,(state,payload)=>payload)
    .reset(resetGame);


$currentPlayersTurn.watch(player => console.log(`Player ${player} turn`))
$tictacfeild.watch(arr => console.log(arr));
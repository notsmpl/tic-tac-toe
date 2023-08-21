import {createStore,createEvent} from 'effector'

interface IResult {
    winner?: string,
    state?: string
};

export const updateBoard = createEvent<string>();
export const changePlayerTurn = createEvent<string>();
export const resetGame = createEvent();
export const changeResult = createEvent<IResult>();
export const changeStatus = createEvent();



export const $tictacfeild = createStore<Object>(["","","","","","","","",""])
    .on(updateBoard,(state,payload)=> payload)
    .reset(resetGame);

export const $currentPlayersTurn = createStore<string>('X')
    .on(changePlayerTurn,(state,payload)=>payload)
    .reset(resetGame);

export const $result = createStore<IResult>({state:''})
    .on(changeResult,(state,payload)=>({
    ...state,
    ...payload
}))
    .reset(resetGame);

export const $status = createStore<boolean>(true)
    .on(changeStatus, payload => !payload )
    .reset(resetGame);



$currentPlayersTurn.watch(player => console.log(`Player ${player} turn`))
$tictacfeild.watch(arr => console.log(arr));
$result.watch(res => console.log(res));
$status.watch(status => console.log(status))

export const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
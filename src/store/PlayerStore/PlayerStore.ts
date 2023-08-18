
import { createEvent, createStore } from "effector";

interface IUser{
    name?: string
}

export const changeFirstPlayer = createEvent<IUser>();
export const changeSecondPlayer = createEvent<IUser>();


export const $firstPlayerInfo = createStore<IUser>({})
    .on(changeFirstPlayer,(state,payload)=>({
        ...state,
        ...payload
    }));

    

export const $secondPlayerInfo = createStore<IUser>({})
    .on(changeSecondPlayer,(state,payload)=>({
        ...state,
        ...payload
    }));





// $firstPlayerInfo.watch((player) => console.log(`player 1: ${player.name}`))
// $secondPlayerInfo.watch((player) => console.log(`player 2: ${player.name}`))


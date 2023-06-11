import { atom } from "recoil";
import { INITIAL_TIME } from "./constant";


export const buttonState = atom({
    key: "toggleButton",
    default: false
});

export const roundState = atom({
    key: "round",
    default: 0
});

export const goalState = atom({
    key: "goal",
    default: 0
});

export const timerState = atom({
    key: "timer",
    default: INITIAL_TIME

})
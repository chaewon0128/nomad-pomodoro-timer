import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { buttonState, goalState, roundState, timerState } from '../atoms';
import { padStartingNum, useInterval } from '../util';
import { PauseIcon, PlayingIcon } from '../icons/icons';


const Container = styled.div`
    margin-top: 50px;
    max-height: 700px;
    display:  flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    span {
        font-size: 100px;
        padding: 0;
        color: rgba(0, 0, 0, 0.4);
    }
`
const Box = styled(motion.div)`
    background-color: #ffffff;
    border-radius: 10px;
    width: 250px;
    min-height: 350px;
    max-height: 400px;
    color: #E84C3E;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    font-weight: 700;
`
const Btn = styled(motion.button)`
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: -35%;
    left: 50%;
    margin-left: -50px;
    border: none;
    color: rgba(0, 0, 0, 0.4);
    background-color: transparent;
    cursor: pointer;
`


export default function Timer() {
    const [round, setRound] = useRecoilState(roundState)
    const [goal, setGoal] = useRecoilState(goalState)
    const [isPlaying, setIsPlaying] = useRecoilState(buttonState)
    const [timer, setTimer] = useRecoilState(timerState)
    const onClick = () => { setIsPlaying((current) => !current) }

    useInterval(
        () => {
            if (isPlaying) {
                setTimer((count) => count - 1)
            }
        },
        (timer === 0) ? null : 1000,
    );

    useEffect(() => {
        if (timer === 0) {
            setRound((current) => current + 1)
            setIsPlaying(false)
            setTimer(10) // 변경해야함 1500
        }

        if (round === 4) {
            setGoal((current) => current + 1)
            setRound(0)
        }
        if (goal > 12) {
            setGoal(12)
        }
    }, [timer, setRound, setGoal])



    return (
        <>
            <Container>
                <Box>{padStartingNum(Math.floor(timer / 60))}</Box>
                <span>:</span>
                <Box> {padStartingNum(timer % 60)}</Box>
            </Container>
            <Btn whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }} onClick={onClick}>{isPlaying ?
                <PauseIcon />
                : <PlayingIcon />}
            </Btn>
        </>
    );
}


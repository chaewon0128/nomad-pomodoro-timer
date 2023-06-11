import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { goalState, roundState, timerState } from '../atoms';
const Container = styled.div`
display: flex;
position: absolute;
top: 140%;
right: 50%;
gap: 150px;
margin-right:  -150px;

`
const Round = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 600;
    span {
        margin-bottom: 10px;
        color : #FBB9B2;
    }
    
`
const Goal = styled(Round)`
`
export default function Result() {
    const round = useRecoilValue(roundState)
    const [goal, setGoal] = useRecoilState(goalState)
    const timer = useRecoilValue(timerState);




    return (
        <Container>
            <Round><span>{`${round}/4`}</span>ROUND</Round>
            <Goal><span>{`${goal}/12`}</span>GOAL</Goal>
        </Container>
    );
}


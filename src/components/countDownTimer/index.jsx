import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressBarContainer, CountDownButton, CountDownContainer, CountDownText } from './styles';

const CountDownTimer = () => {        
    const time = (5 * 60);
    const [remainingTime, setRemainingTime] = useState(time);
    const [isActive, setIsActive] = useState(false);
    const [progress, setProgress] = useState(0);

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    useEffect(() => {
        let intervalId;
        if(isActive && remainingTime > 0) {
            intervalId = setInterval(() => {
                setProgress((100 * remainingTime) / time);
                setRemainingTime(remainingTime - 1);
            }, 1000);
        } else if(remainingTime === 0){
            setProgress(0);
        }
        return () => clearInterval(intervalId);
    },[remainingTime, isActive]);

    return (
        <CountDownContainer>
            <CountDownButton onDoubleClick={() => {
                setIsActive(false);
                setRemainingTime(time);
                setProgress(0)}
            } onClick={() => remainingTime > 0 ? setIsActive(!isActive) : setRemainingTime(time)}>
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                <CountDownText>
                    {remainingTime > 0 ? isActive ? "pause": "start" : "reset"}
                </CountDownText>
            </CountDownButton>
        <CircularProgressBarContainer>
            <CircularProgressbar value={100 - progress} styles={buildStyles({
            strokeLinecap: 'round',
            pathTransitionDuration: 0.5,
            pathColor: `#156998`,            
            backgroundColor: '#e1e1e1',
        })}/>
        </CircularProgressBarContainer>
        </CountDownContainer>

    );
}

export default CountDownTimer;
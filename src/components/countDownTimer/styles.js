import styled from 'styled-components';

export const CountDownContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background-color: 156998;
    box-shadow: 0 0 10px inset rgba(0, 0, 0, 0.5);
`;

export const CountDownButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 40px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #fdfdfd;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-size: 5rem;
    transition: all 0.1s;
    box-shadow: 0 0 50px outset rgba(0, 0, 0, 0.5);
    z-index: 10;


    :hover {
        cursor: pointer;
    }

    :active {
        zoom: 0.99;
    }
`;

export const CircularProgressBarContainer = styled.div`    
    position: absolute;
    width: 350px;
    height: 350px;
    pointer-events: none;
    border-radius: 50%;
    box-shadow: 0 0 100px outset rgba(0, 0, 0, 0.5);
`;

export const CountDownText = styled.p`
    position: relative;
    top: -10px;
    font-size: 1.5rem;
    color: #b7b8b8;
`;
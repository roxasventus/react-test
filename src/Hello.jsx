import React from "react";
import styled from 'styled-components'
import "./Hello.css"

function Hello(){
    const PracticeStyle = {
        marginTop: '10px',
        backgroundColor: 'blue'
    };

    const StyledButton = styled.button`
        color:red;
        background-color:gray;
    `;

    return (
        <>
            <div style={{marginTop: '10px', backgroundColor: 'red'}}>Hello World!</div>

            <div style= {PracticeStyle}>Hello World!</div>
            <div style= {PracticeStyle}>Hello World!</div>
            <div style= {PracticeStyle}>Hello World!</div>

            <div className='red'>Hello World!</div>
            <div className='red'>Hello World!</div>
            <div className='red'>Hello World!</div>

            <StyledButton>나만의 버튼</StyledButton>
        </>
    );
}
export default Hello;
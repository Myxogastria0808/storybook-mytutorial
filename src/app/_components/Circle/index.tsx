'use client';

import React from 'react';
import styled from 'styled-components';

const StyledCircle = styled.div<{ radius: string; color: string; backgroundColor: string }>`
    height: ${(props) => props.radius};
    width: ${(props) => props.radius};
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Circle = (props: { radius: string; color: string; backgroundColor: string; text: string }) => {
    return (
        <StyledCircle radius={props.radius} color={props.color} backgroundColor={props.backgroundColor}>
            {props.text}
        </StyledCircle>
    );
};

export default Circle;

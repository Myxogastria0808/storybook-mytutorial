import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 1024px;
`;

const Container = (props: { children: React.ReactNode }) => {
    return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 0 1 50%; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    gap: 2em;
`;

const EmptyContainerLine = styled.div`
    height: 0.15em; 
    width: 4em; 
    background-color: #4D270C;
`;

const ReasonsToHaveACat = () => {
    return (
        <Container>
            <EmptyContainerLine>&nbsp;</EmptyContainerLine>
            <h1
                style={{ fontSize: '3em' }}
            >Why should you have a cat?</h1>
            <p
                style={{ fontSize: '1.5em' }}
            >Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
            <a
                style={{ fontSize: '1em' }}
            >Read more</a>
        </Container>
    );
};

export default ReasonsToHaveACat;

import React from 'react';
import styled from 'styled-components';

const CatGrid = styled.div`
    display: grid;
    grid-gap: 1em;
    flex: 0 1 50%;
`;

const CatImageContainer = styled.div<{ $gridArea: string }>`
    grid-area: ${({ $gridArea }) => $gridArea};
`;

const CatImage = styled.img`
    width: 100%;
    height: auto;
`;

const CatImagesGrid = () => {
    return (
        <CatGrid>
            <CatImageContainer
                $gridArea="2 / 2 / 4 / 3"
            >
                <CatImage src="image 1.png" />
            </CatImageContainer>
            <CatImageContainer
                $gridArea="1 / 1 / 2 / 3"
            >
                <CatImage src="image 2.png" />
            </CatImageContainer>
            <CatImageContainer
                $gridArea="1 / 3 / 3 / 4"
            >
                <CatImage src="image 3.png" />
            </CatImageContainer>
        </CatGrid>
    );
};

export default CatImagesGrid;

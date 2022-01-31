import React from 'react';
import styled from 'styled-components';
import CatImagesGrid from './why-you-should-have-a-cat/CatImagesGrid';
import ReasonsToHaveACat from './why-you-should-have-a-cat/ReasonsToHaveACat';


const Wrapper = styled.section`
    display: flex;
    font-size: 2vmin;
    gap: 2em;
    padding: 5em;

    @media screen and (max-width: 1000px){
        flex-direction: column;
    }
`;



const WhyShouldYouHaveACatSection = () => {
    return (
        <Wrapper>
            <ReasonsToHaveACat />
            <CatImagesGrid />
        </Wrapper>
    );
};

export default WhyShouldYouHaveACatSection;

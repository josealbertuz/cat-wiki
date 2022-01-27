import React from 'react';
import styled from 'styled-components';
import BreedHeroForm from './search-breeds/BreedHeroForm';

const Wrapper = styled.section`
    min-height: 40em;
`;

const BreedSearchSection = () => {
    return (
        <Wrapper>
            <BreedHeroForm />
        </Wrapper>
    );
};

export default BreedSearchSection;

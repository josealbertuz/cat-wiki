import React from 'react';
import styled from 'styled-components';
import BreedHeroForm from './search-breeds/BreedHeroForm';
import MostSearchBreeds from './most-search-breeds/MostSearchBreeds';

const Wrapper = styled.section`
    min-height: 40em;
`;

const BreedSearchSection = () => {
    return (
        <Wrapper>
            <BreedHeroForm />
            <MostSearchBreeds />
        </Wrapper>
    );
};

export default BreedSearchSection;

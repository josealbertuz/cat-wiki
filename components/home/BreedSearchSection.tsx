import React from 'react';
import BreedHeroForm from './search-breeds/BreedHeroForm';
import MostSearchBreeds from './most-search-breeds/MostSearchBreeds';

const BreedSearchSection = () => {
    return (
        <>
            <BreedHeroForm />
            <MostSearchBreeds />
        </>
    );
};

export default BreedSearchSection;

import React from 'react';
import styled from 'styled-components';
import BreedSearchInput from './BreedSearchInput';


const HeroContainer = styled.div`
    display: grid;
`;

const HeroImage = styled.img`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    object-fit: cover;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    margin-left: 1em;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    font-size: clamp(0.8rem, 5vw, 4rem);
    color: #FFF;
`;

const FormTitle = styled.h1`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1em;
`;

const FormSubtitle = styled.h2`
    font-size: 0.5em;
    width: 24ch;
    padding-bottom: 2em;
`;

const BreedHeroForm = () => {

    return (
        <HeroContainer>
            <HeroImage src="HeroImagelg.png" />
            <FormContainer>
                <FormTitle>Catwiki</FormTitle>
                <FormSubtitle>Get to know more about your cat breed</FormSubtitle>
                <BreedSearchInput />
            </FormContainer>
        </HeroContainer>
    );
};

export default BreedHeroForm;

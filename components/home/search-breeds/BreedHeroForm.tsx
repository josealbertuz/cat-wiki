import React from 'react';
import styled from 'styled-components';
import BreedSearchInput from './BreedSearchInput';


const HeroContainer = styled.div`
    position: relative;
`;

const HeroImage = styled.img`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    object-fit: cover;
`;

const FormContainer = styled.form`
    font-size: clamp(0.8rem, 5vw, 4rem);
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 5%;
    top: 20%;
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

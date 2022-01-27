import React from 'react';
import styled from 'styled-components';
import HeroForm from './HeroForm';

const Wrapper = styled.section`
    min-height: 40em;
`;

const MostSearchContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const CatSearchSection = () => {
    return (
        <Wrapper>
            <HeroForm />
            <MostSearchContainer>
                here comes read more
            </MostSearchContainer>
        </Wrapper>
    );
};

export default CatSearchSection;

import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.h3`
    font-family: ${({theme}) => theme.fonts.secondary};
    font-size: 1.5rem;
    padding: 1em 0em 0em 1em;
`;

const Header = () => {
    return (
        <header>
            <HeaderTitle>Catwiki</HeaderTitle>
        </header>
    );
};

export default Header;

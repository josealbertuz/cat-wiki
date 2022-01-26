import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${({theme}) => theme.colors.main};
    color: #FFF;
    margin: 0 1em;
    padding: 2em;
`;

const FooterTitle = styled.h3`
    font-family: ${({theme}) => theme.fonts.secondary};
    font-size: 1.5rem;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTitle>Catwiki</FooterTitle>
            <p>© created by @josealbertuz - devChanllenge.io 2022</p>
        </FooterContainer>
    );
};

export default Footer;

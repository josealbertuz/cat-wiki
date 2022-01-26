import React from 'react';
import styled from 'styled-components';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Main = styled.main`
    flex-grow: 1;
    margin: 1em 1.5em;
    border: 1px solid black;
`;

type AppLayoutProps = {
    children: JSX.Element
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <Container>
            <Header />
            <Main>
                {
                    children
                }
            </Main>
            <Footer />
        </Container>
    );
};

export default AppLayout;

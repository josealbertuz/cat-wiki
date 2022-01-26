import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    `;

type AppLayoutProps = {
    children: JSX.Element
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <Container>
            <header>header</header>
            {
                children
            }
            <footer>footer</footer>
        </Container>
    );
};

export default AppLayout;

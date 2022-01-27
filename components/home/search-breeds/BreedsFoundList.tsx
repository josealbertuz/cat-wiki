import React from 'react';
import styled from 'styled-components';

const BreedsFoundListContainer = styled.ul`
    position: absolute;
    margin-top: 10px;
    max-height: 5em;
    overflow: auto;
    background-color: #FFF;
    width: 100%;
    border-radius: 12px;
`;

const BreedsFoundListItem = styled.li`
    font-size: 2vmin;
    padding: 1em;
    color: ${({theme}) => theme.colors.main};


    &:hover {
        background-color: #979797;
    }
`;

type BreedsFoundListProps = {
    breeds: {id: string, breed: string}[]
}

const BreedsFoundList = ({breeds}: BreedsFoundListProps) => {
    return (
        <BreedsFoundListContainer>
            {
                breeds.map(({id, breed}) => (
                    <BreedsFoundListItem>{breed}</BreedsFoundListItem>
                ))
            }
        </BreedsFoundListContainer>
    );
};

export default BreedsFoundList;

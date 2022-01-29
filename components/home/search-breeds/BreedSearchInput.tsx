import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from "react-icons/md";
import BreedsFoundList from './BreedsFoundList';
import { useCatBreeds } from '../../../hooks/cat-fetching-hooks';

const InputWrapper = styled.div`
    position: relative;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    width: min-content;
    grid-area: 1 / 1;
    color: ${({ theme }) => theme.colors.main};
    font-size: 0.8em;
    padding-right: 0.3em;
`;

const SearchBreedInput = styled.input`
    grid-area: 1 / 1;
    padding: 0.5em 0.7em;
    border-radius: 30px; 
    height: 7vmin;
    font-size: 0.35em;
    width: 100%;

    &:focus {
        outline: none;
    }
`;

const BreedSearchInput = () => {

    const [inputText, setInputText] = useState('');
    const { data, refetch: fetchBreeds } = useCatBreeds(inputText);

    useEffect(() => {
        if (inputText) {
            const timeoutId = setTimeout(() => {
                fetchBreeds();
            }, 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [inputText]);

    return (
        <InputWrapper>
            <div style={{
                display: 'grid',
                justifyItems: 'flex-end'
            }}>
                <SearchBreedInput
                    placeholder="Enter your breed"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                />
                <IconWrapper>
                    <MdSearch />
                </IconWrapper>
            </div>
            {
                data && <BreedsFoundList breeds={data} />
            }
        </InputWrapper>
    );

};

export default BreedSearchInput;

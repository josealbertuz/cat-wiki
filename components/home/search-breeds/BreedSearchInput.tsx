import React, { useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from "react-icons/md";
import BreedsFoundList from './BreedsFoundList';
import { useCatBreeds } from '../../../hooks/cat-fetching-hooks';

const InputWrapper = styled.div`
    position: relative;
`;

const IconWrapper = styled.span`
    position: absolute;
    color: ${({ theme }) => theme.colors.main};
    font-size: 0.8em;
    right: 0.3em;
    top: 0.6em;
`;

const SearchBreedInput = styled.input`
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

    const [ inputText, setInputText ] = useState('');

    const { data } = useCatBreeds(inputText);

    return (
        <InputWrapper>
            <SearchBreedInput 
                placeholder="Enter your breed"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} 
            />
            <IconWrapper>
                <MdSearch />
            </IconWrapper>
            {
                data && <BreedsFoundList breeds={data} />
            }
        </InputWrapper>
    );
    
};

export default BreedSearchInput;

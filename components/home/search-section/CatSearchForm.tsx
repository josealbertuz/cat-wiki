import React from 'react';
import styled from 'styled-components';
import { MdSearch } from "react-icons/md";

const SearchInputWrapper = styled.div`
    position: relative;
`;

const IconWrapper = styled.span`
    position: absolute;
    color: ${({ theme }) => theme.colors.main};
    font-size: 0.8em;
    right: 0.3em;
    top: 0.6em;
`;

const SearchCatInput = styled.input`
    padding: 0.5em 0.7em;
    border-radius: 30px;
    height: 7vmin;
    font-size: 0.35em;
    width: 100%;

    &:focus {
        outline: none;
    }
`;

const CatSearchForm = () => {
    return (
        <SearchInputWrapper>
            <SearchCatInput placeholder="Enter your breed" />
            <IconWrapper>
                <MdSearch />
            </IconWrapper>
        </SearchInputWrapper>
    );
};

export default CatSearchForm;

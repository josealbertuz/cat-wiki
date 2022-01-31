import React from 'react';
import styled from 'styled-components';

const MostSearchContainer = styled.div`
    font-size: clamp(0.8rem, 3vw, 1.5rem);
    background-color: ${({ theme }) => theme.colors.secondary};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 1em 10%;
`;

const MostSearchSubtitle = styled.h2`
  color: #291507;
  font-weight: 500;
  text-decoration: underline #4D270C;
  text-decoration-thickness: 4px;
`;

const MostSearchTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5em;
  width: 12em;
  align-self: flex-start;
`;

const FigureGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;

  @media screen and (min-width: 1000px){
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

const CatFigure = styled.figure`
  flex: 0 1 30vmin;
`;

const TitlesContainer = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: flex-end; 
  min-height: 8em; 
  padding: 1em 0; 
  flex-wrap: wrap;
`;

const MostSearchBreeds = () => {
  return (
    <MostSearchContainer>
      <MostSearchSubtitle>Most Searched Breeds</MostSearchSubtitle>
      <TitlesContainer>
        <MostSearchTitle>66+ Breeds For You to discover</MostSearchTitle>
        <a>see more</a>
      </TitlesContainer>
      <FigureGrid>
        {
          Array.from(Array(4)).map(() => (

            <CatFigure>
              <img 
                style={{height: 'auto', width: '100%'}}
                src="https://picsum.photos/250/250" />
                <figcaption>Siberian</figcaption>
            </CatFigure>

          ))
        }
      </FigureGrid>
    </MostSearchContainer>
  );
};

export default MostSearchBreeds;

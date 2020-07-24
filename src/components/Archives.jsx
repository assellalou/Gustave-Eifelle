import React from 'react';
import NothingToShow from './shared/NothingToShow.jsx';
import styled from 'styled-components';
const Archives = () => {
  const archives = [];
  return (
    <Container>
      <Title>Archives / {archives.length}</Title>
      <ArchivesContainer>
        {archives.length ? (
          <h1>Archive card</h1> //change it
        ) : (
          <NothingToShow name="archives" />
        )}
      </ArchivesContainer>
    </Container>
  );
};
const ArchivesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
`;
const Title = styled.h3`
  margin: 30px;
`;
export default Archives;

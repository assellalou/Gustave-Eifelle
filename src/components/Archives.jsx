import React, { useContext } from 'react';
import NothingToShow from './shared/NothingToShow.jsx';
import styled from 'styled-components';
import LanguageContext from './LanguageContext.jsx';
const Archives = () => {
  const archives = [];
  const [lang] = useContext(LanguageContext);
  return (
    <Container>
      <Title>
        {lang.Archives.title} / {archives.length}
      </Title>
      <ArchivesContainer>
        {archives.length ? (
          <h1>Archive card</h1> //change it
        ) : (
          <NothingToShow name={lang.Archives.title} />
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

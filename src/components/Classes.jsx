import React from 'react';
import NothingToShow from './shared/NothingToShow.jsx';
import styled from 'styled-components';

const Classes = () => {
  const classesArr = [];
  return (
    <Container>
      <Title>Classes / {classesArr.length}</Title>
      <ClassesContainer>
        {classesArr.length ? (
          <h1>classcard</h1> //change it
        ) : (
          <NothingToShow name="classes" />
        )}
      </ClassesContainer>
    </Container>
  );
};
const ClassesContainer = styled.div`
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
export default Classes;

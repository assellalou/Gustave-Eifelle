import React from 'react';
import CourseCard from './shared/CourseCard.jsx';
import styled from 'styled-components';
import NothingToShow from './shared/NothingToShow.jsx';

const Courses = () => {
  const courses = [
    {
      name: 'Americas wars',
      uri: 'https://example.com',
      chapter: 'War of Afghanistan',
      type: 'History',
      teacher: 'Prof Homer',
    },
  ];

  return (
    <Container>
      <Title>Courses / {courses.length}</Title>
      <Coursesontainer>
        {courses ? (
          courses.map((item) => <CourseCard course={item} key={item.name} />)
        ) : (
          <NothingToShow name={'couses'} />
        )}
      </Coursesontainer>
    </Container>
  );
};

const Coursesontainer = styled.div`
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

export default Courses;

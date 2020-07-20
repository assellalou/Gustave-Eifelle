import React from 'react';
import CourseCard from './shared/CourseCard.jsx';
import styled from 'styled-components';

const Courses = () => {
  const courses = [
    {
      name: 'Americas wars',
      uri: 'https://example.com',
      chapter: 'War of Afghanistan',
      type: 'History',
      teacher: 'Prof Homer',
    },
    {
      name: 'Data visualization',
      uri: 'https://example.com',
      chapter: 'Python Tuples',
      type: 'Software engineering',
      teacher: 'Mr Linus',
    },
    {
      name: 'DNA Sequence',
      uri: 'https://example.com',
      chapter: 'Decoding dragon DNA',
      type: 'Evolutionary biology',
      teacher: 'Dr Dawkins ',
    },
  ];

  return (
    <Container>
      <Title>Courses</Title>
      <Coursesontainer>
        {courses.map((item) => (
          <CourseCard course={item} key={item.name} />
        ))}
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

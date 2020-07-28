import React, { useContext } from 'react';
import CourseCard from './shared/CourseCard.jsx';
import styled from 'styled-components';
import NothingToShow from './shared/NothingToShow.jsx';
import LanguageContext from './LanguageContext.jsx';

const Courses = () => {
  const [lang] = useContext(LanguageContext);
  const courses = [
    {
      name: 'Théorie des nombres',
      uri: 'https://visio.callmykid.com/gustaveeifelle',
      chapter: 'Nombre irrationnel',
      type: 'MATH',
      teacher: 'Prof Youssefie',
    },
  ];

  return (
    <Container>
      <Title>
        {lang.Courses.title} / {courses.length}
      </Title>
      <Coursesontainer>
        {courses ? (
          courses.map((item) => <CourseCard course={item} key={item.name} />)
        ) : (
          <NothingToShow name={lang.Courses.title} />
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

import React from 'react';
import NothingToShow from './shared/NothingToShow.jsx';

const Classes = () => {
  const classesArr = [];
  return classesArr.length ? (
    <h1>classcard</h1>
  ) : (
    <NothingToShow name="classes" />
  );
};
export default Classes;

import React from 'react';
import NothingToShow from './shared/NothingToShow.jsx';
const Archives = () => {
  const archives = [];
  return archives.length ? (
    <h1>Archive card</h1>
  ) : (
    <NothingToShow name="archives" />
  );
};

export default Archives;

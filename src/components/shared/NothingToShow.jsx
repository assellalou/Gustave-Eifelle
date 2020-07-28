import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import LanguageContext from './../LanguageContext.jsx';

const NothingToShow = ({ name }) => {
  const [lang] = useContext(LanguageContext);
  return (
    <Container>
      <FontAwesomeIcon
        icon={faExclamationCircle}
        style={{
          color: '#CE3D3D',
          fontSize: '100px',
          opacity: '.3',
          margin: '20px',
        }}
      />
      <h1>
        {lang.NothingToShow.firstpart} {name} {lang.NothingToShow.lastpart}
      </h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #aaa;
  opacity: 0.7;
  text-align: center;
`;

export default NothingToShow;

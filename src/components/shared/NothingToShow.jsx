import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const NothingToShow = ({ name }) => {
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
      <h1>no {name} to show</h1>
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
`;

export default NothingToShow;

import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import SideNav from './components/shared/SideNav.jsx';
import profilepic from './resources/default.png';
import TopNav from './components/shared/TopNav.jsx';
import styled from 'styled-components';
import Courses from './components/Courses.jsx';
import Calendar from './components/Calendars.jsx';
import Profile from './components/Profile.jsx';
import content from './Languages';
import LanguageContext from './components/LanguageContext.jsx';
const App = () => {
  const languageHook = useState(content.FRA);
  return (
    <LanguageContext.Provider value={languageHook}>
      <div style={{ width: '100%' }}>
        <TopNav />
        <Container>
          <SideNav
            profile={{
              img: profilepic,
              name: 'Clark Greiffen',
              email: 'clark@contact.com',
            }}
          />
          <Router style={{ width: '100%' }}>
            <Courses path="/" />
            <Courses path="/courses" />
            <Calendar path="/calendar" />
            <Profile path="/profile" />
          </Router>
        </Container>
      </div>
    </LanguageContext.Provider>
  );
};

const Container = styled.div`
  display: flex;
`;
render(<App />, document.querySelector('#root'));

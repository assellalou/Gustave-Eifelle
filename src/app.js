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
import Classes from './components/Classes.jsx';
import Archives from './components/Archives.jsx';
import Login from './components/Login.jsx';
const App = () => {
  const languageHook = useState(content.FRA);
  const [isActive, setIsActive] = useState(false);

  const handleConnect = () => {
    setIsActive(true);
  };
  return (
    <LanguageContext.Provider value={languageHook}>
      {isActive ? (
        <div style={{ width: '100%', overflow: 'hidden' }}>
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
              <Login path="/login" />
              <Courses path="/courses" />
              <Calendar path="/calendar" />
              <Profile path="/profile" />
              <Classes path="/classes" />
              <Archives path="/archives" />
            </Router>
          </Container>
        </div>
      ) : (
        <Login connect={handleConnect} />
      )}
    </LanguageContext.Provider>
  );
};

const Container = styled.div`
  display: flex;
`;
render(<App />, document.querySelector('#root'));

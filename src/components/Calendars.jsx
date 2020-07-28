import React, { useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import styled from 'styled-components';
import LanguageContext from './LanguageContext.jsx';
moment.locale('en-GB');
const localizer = momentLocalizer(moment);
let events = [
  {
    start: moment().add(-1, 'days').toDate(),
    end: moment().add(1, 'days').toDate(),
    title: 'Théorie des nombres',
  },
];

const Calendars = () => {
  const [lang] = useContext(LanguageContext);
  return (
    <Container>
      <Title>
        {lang.Calendar.title} / {events.length}
      </Title>
      <Calendar
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ width: '100%' }}
        localizer={localizer}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
  margin: auto;
  height: 90%;
`;
const Title = styled.h3`
  margin: 30px;
`;
export default Calendars;

import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';
moment.locale('en-GB');
const localizer = momentLocalizer(moment);
let events = [
  {
    title: 'Completion of War of Afghanistane',
    start: moment().format(),
    end: moment().endOf('day').fromNow(),
    allDay: true,
    resource: '',
  },
];

const Calendars = () => {
  return (
    <Container>
      <Title>Calendar</Title>
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
  width: 90%;
  margin: auto;
  height: 90%;
`;
const Title = styled.h3`
  margin: 30px;
`;
export default Calendars;

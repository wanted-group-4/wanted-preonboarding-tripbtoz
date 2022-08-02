import React from 'react';
import styled from 'styled-components';

import { week } from '@constants/day';

function Week() {
  return (
    <WeekContainer>
      {week.map(day => (
        <DayOfWeek key={day}>{day}</DayOfWeek>
      ))}
    </WeekContainer>
  );
}

export default Week;

const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  height: 5vw;
`;
const DayOfWeek = styled.div`
  font-size: 2vw;
`;

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
  color: ${({ theme }) => theme.color.grey_03};
  height: 35px;
  @media ${({ theme }) => theme.deviceSize.middle} {
    height: 9.5vw;
  }
`;
const DayOfWeek = styled.div`
  font-size: 16px;
  width: 45px;
  margin: 0 auto;
  @media ${({ theme }) => theme.deviceSize.middle} {
    font-size: 4vw;
  }
`;

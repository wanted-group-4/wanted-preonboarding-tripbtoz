import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import { monthArray } from '@constants/day';

interface IDatesProps {
  year: number;
  month: number;
  dateRef: React.MutableRefObject<{
    [key: string]: HTMLDivElement;
  }>;
}

function Dates({ year, month, dateRef }: IDatesProps) {
  const lastDay = new Date(year, month + 1, 0).getDate();
  const startDayOfWeek = new Date(year, month, 1).getDay();

  return (
    <DatesContainer>
      {monthArray(lastDay).map(day => {
        const date = format(new Date(year, month, day), 'yyyyMMdd');
        const dayOfWeek = new Date(year, month, day).getDay();
        const start = day === 1 ? startDayOfWeek : null;
        return (
          <DayWrap
            key={day}
            start={start}
            dayOfWeek={dayOfWeek}
            ref={ref => {
              if (ref !== null) dateRef.current[date] = ref;
            }}
          >
            <Day dayOfWeek={dayOfWeek}>{day}</Day>
          </DayWrap>
        );
      })}
    </DatesContainer>
  );
}

export default Dates;

const DatesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  row-gap: 15px;
  @media ${({ theme }) => theme.deviceSize.middle} {
    row-gap: 3.8vw;
  }
`;

const DayWrap = styled.div<{ start: any; dayOfWeek: number }>`
  display: flex;
  justify-content: center;
  grid-column-start: ${({ start }) => start !== null && start + 1};
  &.start,
  &.start_only {
    button {
      background: #ff375c;
      border-radius: 100%;
      color: #fff;
    }
  }
  &.selected {
    background: ${({ dayOfWeek }) => {
      if (dayOfWeek === 0)
        return 'linear-gradient(to right, transparent 50%, #FFD7DE 50%)';
      if (dayOfWeek === 6)
        return 'linear-gradient(to left,  transparent 50%, #FFD7DE 50%)';
      return '#FFD7DE';
    }};
    button {
      color: #fff;
      background: ${({ dayOfWeek }) => {
        if (dayOfWeek === 0 || dayOfWeek === 6) return '#FFD7DE';
      }};
      border-radius: ${({ dayOfWeek }) => {
        if (dayOfWeek === 0 || dayOfWeek === 6) return '100%';
      }};
    }
  }
  &.selected.start {
    background: ${({ dayOfWeek }) => {
      if (dayOfWeek === 6) return 'transparent';
      return 'linear-gradient(to right, transparent 50%, #FFD7DE 50%)';
    }};
    button {
      background: #ff375c;
      border-radius: 100%;
      color: #fff;
    }
  }
  &.end {
    background: ${({ dayOfWeek }) => {
      if (dayOfWeek === 0) return 'transparent';
      return 'linear-gradient(to left, transparent 50%, #FFD7DE 50%)';
    }};
    button {
      background: #ff375c;
      border-radius: 100%;
      color: #fff;
    }
  }
  &.disabled {
    pointer-events: none;
    button {
      color: #ccc;
    }
  }
  &.today {
    position: relative;
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.pink_02};
    }
  }
`;
const Day = styled.button<{ dayOfWeek: number }>`
  font-size: 16px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  color: ${({ dayOfWeek }) => {
    if (dayOfWeek === 6) return '#405EFF';
    if (dayOfWeek === 0) return '#FF375C';
    return '#000';
  }};
  @media ${({ theme }) => theme.deviceSize.middle} {
    font-size: 4vw;
    width: 10vw;
    height: 10vw;
  }
  &:hover {
    border: 3px solid ${({ theme }) => theme.color.pink_02};
    border-radius: 50%;
    @media ${({ theme }) => theme.deviceSize.middle} {
      border-width: 5px;
    }
  }
`;

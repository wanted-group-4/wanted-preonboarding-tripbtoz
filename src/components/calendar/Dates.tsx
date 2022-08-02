import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { monthArray } from '@constants/day';

interface IDatesProps {
  year: number;
  month: number;
  dateRef: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null;
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
            ref={ref => (dateRef.current[date] = ref)}
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
  row-gap: 2.5vw;
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
`;
const Day = styled.button<{ dayOfWeek: number }>`
  font-size: 2.5vw;
  width: 5vw;
  height: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  color: ${({ dayOfWeek }) => {
    if (dayOfWeek === 6) return '#405EFF';
    if (dayOfWeek === 0) return '#FF375C';
    return '#000';
  }};
`;

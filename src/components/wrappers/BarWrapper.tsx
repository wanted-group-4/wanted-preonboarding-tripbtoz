import styled from 'styled-components';
import { IStyledProps } from '@type/style';

const BarWrapper = styled.div<IStyledProps>`
  position: relative;
  width: 100%;
  height: ${props => props?.height};
  display: flex;
  justify-content: space-between;
`;

export default BarWrapper;

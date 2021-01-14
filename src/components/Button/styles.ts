import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.button`
  background-color: ${colors.primary_color_04};
  color: ${colors.neutral_color_01};

  height: 40px;
  padding: 12px;
  border-radius: 10px;
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;
  p {
    padding: 0 8px;
  }

  &:hover {
    box-shadow: 0px 4px 8px ${colors.shadow_color_01};
    background-color: ${(shade(0.2), ` ${colors.primary_color_04}`)};
  }
`;

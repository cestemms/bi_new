import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${colors.neutral_color_05};
  font-size: 14px;

  svg {
    margin-right: 8px;
  }

  a {
    text-decoration: none;
    font-weight: bold;

    margin-left: 8px;
  }
`;

import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  span {
    width: 160px;
    padding: 8px;
    border-radius: 4px;
    background: ${colors.positive_color_01};

    font-size: 14px;
    font-weight: 500;
    text-align: center;

    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);

    color: ${colors.primary_color_02};

    //Arrow
    &::before {
      content: '';
      position: absolute;
      border-style: solid;
      border-color: ${colors.positive_color_01} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

import styled, { css } from 'styled-components';
import colors from '../../styles/colors';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErroed?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 12px;
  padding-right: 14px;

  border: 2px solid ${colors.neutral_color_03};
  border-radius: 10px;

  color: ${colors.neutral_color_05};

  display: flex;
  align-items: center;

  ${props =>
    props.isErroed &&
    css`
      border: 2px solid ${colors.alert_color_02};
    `};

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid ${colors.positive_color_01};
      box-shadow: 0px 4px 8px ${colors.shadow_color_01};

      color: ${colors.primary_color_04};
    `};

  ${props =>
    props.isFilled &&
    css`
      color: ${colors.primary_color_04};
    `};

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 8px;
  }

  input {
    outline: none;
    border: none;
    flex: 1;

    background: transparent;

    &::placeholder {
      color: ${colors.neutral_color_04};
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
    color: ${colors.alert_color_03};
  }

  span {
    background: ${colors.alert_color_02};

    &::before {
      border-color: ${colors.alert_color_02} transparent;
    }
  }
`;

import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    display: flex;
    flex-direction: column;
    text-align: left;

    h1 {
      margin-bottom: 24px;
      font-weight: bold;

      color: ${colors.primary_color_01};
    }

    strong {
      margin-bottom: 18px;
      font-weight: bold;
      color: ${colors.neutral_color_05};
    }

    a {
      display: block;

      color: ${colors.primary_color_04};
      text-decoration: none;

      transition: color font-size 0.2s;
      transition: font-size 0.3s;

      &:hover {
        color: ${(shade(0.2), ` ${colors.primary_color_04}`)};
        font-size: 18px;
      }
    }

    .link-row {
      height: 48px;
      width: 100%;
      margin-top: 24px;
      display: flex;

      justify-content: flex-end;
      align-items: baseline;
    }

    .button-row {
      margin: 24px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      > div {
        margin-left: 3px;
        display: flex;
        align-items: center;
        width: 100%;

        label {
          font-size: 14px;
          color: ${colors.neutral_color_05};

          padding-left: 8px;
        }
      }
    }
  }
`;

export const Background = styled.div`
  background-image: linear-gradient(
    to bottom right,
    ${colors.background_color_02},
    ${colors.background_color_03}
  );

  background-color: ${colors.background_color_02};
  border-bottom-right-radius: 200px;
  box-shadow: 10px 8px 18px ${colors.shadow_color_01};

  border-right: 1px inset ${colors.neutral_color_01};

  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  > img {
    width: 280px;
    height: 50px;
  }
`;

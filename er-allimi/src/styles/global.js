import { css } from '@emotion/react';

const globalStyles = ({ colors, breakPoints }) => css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;

    @media (max-width: ${breakPoints.lg}) {
      font-size: 16px;
    }

    @media (max-width: ${breakPoints.md}) {
      font-size: 15px;
    }

    @media (max-width: ${breakPoints.sm}) {
      font-size: 14px;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.grayDarker};
  }

  button {
    cursor: pointer;
  }

  /* @font-face {
    font-family: 'Noto Sans KR';
    src: url('/public/assets/NotoSansKR-Regular.woff');
  } */
`;

export { globalStyles };

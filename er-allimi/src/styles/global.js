import { css } from '@emotion/react';

const globalStyles = ({ breakPoints }) => css`
    body {
        font-family: 'Noto Sans KR';
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

    @font-face {
        font-family: 'Noto Sans KR';
        src: url('/src/assets/NotoSansKR-Regular.otf');
    }
`;

export { globalStyles };
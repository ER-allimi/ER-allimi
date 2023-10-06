import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { AiTwotoneAlert } from '@components';
import { getDateStrByHvidate } from '@utils';

function HpMessageItem({
  msgType,
  msgStartDate,
  msgEndDate,
  msgSymType,
  msgContent,
}) {
  let messageType;
  switch (msgType) {
    case '응급' || 'A':
      messageType = '응급실 메시지';
      break;
    case '중증' || 'B':
      messageType = '중증질환 메시지';
      break;
    default:
      messageType = '응급실 메시지';
  }
  return (
    <Container>
      <Head>
        <AiTwotoneAlert />
        <TitleText>{messageType}</TitleText>
        <DateText>
          ({getDateStrByHvidate(msgStartDate)} ~{' '}
          {getDateStrByHvidate(msgEndDate)})
        </DateText>
      </Head>
      <ContentText>
        {msgSymType} ▹ {msgContent}
      </ContentText>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 1rem 1fr;
  grid-template-columns: 1.5rem 1fr;
  row-gap: 0.5rem;
  padding: 0.7rem 0.5rem;
  border-radius: 0.1rem;
  background-color: ${({ theme }) => theme.colors.grayDark};
  color: white;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      padding: 0.2rem 0.5rem 1.1rem 0.5rem;
    }
  `}
`;

const Head = styled.div`
  grid-row: 1/2;
  grid-column: 1/3;
  color: inherit;

  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.redLight};
  }
`;

const TitleText = styled.p`
  display: inline-block;
  margin-right: 0.2rem;
  font-size: 13px;
  font-weight: 600;
  color: inherit;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 12px;
    }
  `}
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.sm}) {
      font-size: 11px;
    }
  `}
`;

const DateText = styled.span`
  font-size: 10px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 9px;
    }
  `}
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.sm}) {
      font-size: 8px;
    }
  `}
`;

const ContentText = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  font-size: 12px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      line-height: 15px;
      font-size: 11px;
    }
  `}
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.sm}) {
      line-height: 14px;
      font-size: 10px;
    }
  `}
`;

HpMessageItem.propTypes = {
  msgType: PropTypes.string,
  msgStartDate: PropTypes.number,
  msgEndDate: PropTypes.number,
  msgSymType: PropTypes.string,
  msgContent: PropTypes.string,
};

export default HpMessageItem;

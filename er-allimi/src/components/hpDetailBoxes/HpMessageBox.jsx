import PropTypes from 'prop-types';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  HpMessageList,
  BiError,
  RiCloseCircleLine,
  IoNotificationsCircleOutline,
  Badge,
} from '@components';
import { useFetchHpMsg } from '@hooks';
import { showHpMessageState } from '@stores';
import { useParams } from 'react-router-dom';

function HpMessageBox({ className }) {
  const targetHpId = useParams().hospitalId;

  const { data, isLoading, isError } = useFetchHpMsg(targetHpId);
  const [showHpMessage, setShowHpMessage] = useRecoilState(showHpMessageState);
  const [showLocalHpMessage, setShowLocalHpMessage] = useState(true);

  const handleCloseBtnClick = () => {
    setShowLocalHpMessage(false);
  };

  const handleOpenBtnClick = () => {
    setShowLocalHpMessage(true);
  };

  if (isLoading || (Array.isArray(data) && data.length === 0))
    return <div></div>;

  let content, newData;
  if (isError) {
    content = (
      <ErrorText>
        <BiError />
        응급실/중증질환 메시지 데이터를 가져오는데 실패함
      </ErrorText>
    );
  } else {
    newData = Array.isArray(data) ? data : [data];
    content = <HpMessageList data={newData} />;
  }

  return (
    <StyledMessageBox className={className}>
      {showHpMessage &&
        (showLocalHpMessage ? (
          <>
            <Close onClick={handleCloseBtnClick}>
              <RiCloseCircleLine className="close-btn" />
            </Close>
            {content}
          </>
        ) : (
          newData && (
            <Open onClick={handleOpenBtnClick}>
              <IoNotificationsCircleOutline className="open-btn" />
              <MsgCntBadge color="redLight">{newData.length}</MsgCntBadge>
            </Open>
          )
        ))}
    </StyledMessageBox>
  );
}

const StyledMessageBox = styled.div`
  max-width: 300px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      max-width: 100%;
    }
  `}
`;

const ErrorText = styled.p`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.1rem;
  background-color: ${({ theme }) => theme.colors.grayDark};
  font-size: 12px;
  color: white;

  svg {
    margin-right: 0.2rem;
  }
`;

const Close = styled.div`
  display: flex;
  justify-content: end;
  align-items: top;
  margin-bottom: 0.2rem;
  font-size: 11px;
  cursor: pointer;

  .close-btn {
    font-size: 1rem;
    color: black;
  }
`;

const Open = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: top;
  cursor: pointer;

  .open-btn {
    font-size: 2rem;
    color: black;
  }
`;

const MsgCntBadge = styled(Badge)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(30%) translateY(-30%);
  z-index: 5;
  font-size: 11px;
`;

HpMessageBox.propTypes = {
  className: PropTypes.string,
};

export default HpMessageBox;

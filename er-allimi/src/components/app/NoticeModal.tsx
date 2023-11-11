import { useState } from 'react';
import styled from '@emotion/styled';
import { Modal, Button, GrAnnounce } from '@components';

function NoticeModal() {
  const [showModal, setShowModal] = useState(true);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Modal showModal={showModal} handleModalClose={handleModalClose}>
      <Notice>
        <h3>
          <GrAnnounce />
          응급실 알리미 공지사항
        </h3>
        <p>
          응급실 알리미는 국립중앙의료원에서 제공하는 데이터를 사용하고
          있습니다. <br />
          데이터는 30분마다 업데이트 됩니다. <br />
          <Strong>
            실제 방문 시 표기된 정보와는 차이가 있을 수 있으니, 참고용으로
            확인해주시면 감사하겠습니다.
          </Strong>{' '}
          <br /> <br />
          이로 인해 발생한 어떠한 손해는 책임지지 않습니다.
        </p>
        <Button color="redLight" onClick={handleModalClose}>
          확인했습니다.
        </Button>
      </Notice>
    </Modal>
  );
}

const Notice = styled.div`
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    text-align: center;

    svg {
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.grayDark};

    @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      font-size: 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      font-size: 11px;
    }
  }

  button {
    margin-top: 1rem;
    width: 100%;
    padding: 0.5rem;
  }
`;

const Strong = styled.span`
  font-size: inherit;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grayDarker};
`;

export default NoticeModal;

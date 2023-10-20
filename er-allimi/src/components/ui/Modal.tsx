import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { IoClose } from '@components';

interface ModalProps {
  children?: React.ReactNode;
  showModal: boolean;
  handleModalClose: () => void;
  closeIcon?: React.ReactNode;
}

function Modal({
  children = '모달창 내용을 입력해주세요.',
  showModal,
  handleModalClose,
  closeIcon = <IoClose />,
}: ModalProps) {
  useEffect(() => {
    const clickCallback = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('.modal')) return;
      handleModalClose();
    };
    window.addEventListener('click', clickCallback);
  }, []);

  return (
    showModal &&
    ReactDOM.createPortal(
      <ModalContainer>
        <ModalWrap className="modal">
          <Close onClick={handleModalClose}>{closeIcon}</Close>
          {children}
        </ModalWrap>
      </ModalContainer>,
      document.querySelector('.modal-container') as Element,
    )
  );
}

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grayDark};
  z-index: 1000;
`;

const ModalWrap = styled.div`
  position: relative;
  padding: 1rem;
  width: 320px;
  background-color: white;
  border-radius: 0.3rem;
  box-shadow: 5px 5px 5px 5px ${({ theme }) => theme.colors.gray};

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 280px;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  color: ${({ theme }) => theme.colors.grayDark};
  cursor: pointer;
`;

export default Modal;

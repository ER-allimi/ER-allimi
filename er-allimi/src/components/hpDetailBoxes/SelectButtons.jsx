import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { Button, AiTwotoneAlert, FaBed, GiHealingShield } from '@components';
import { selectedHpDetailContentState } from '@stores';

function SelectButtons({ className }) {
  const [selectedHpDetailContent, setSelectedHpDetailContent] = useRecoilState(
    selectedHpDetailContentState,
  );

  const handleButtonClick = (selectedIdx) => {
    setSelectedHpDetailContent(selectedIdx);
  };

  const contents = [
    { text: '응급실 가용 병상', icon: <AiTwotoneAlert />, className: 'er-btn' },
    { text: '입원실 가용 병상', icon: <FaBed />, className: 'rt-btn' },
    { text: '중증질환 수술', icon: <GiHealingShield />, className: 'sr-btn' },
  ];

  const renderButtonsAtLg = contents.map((content, idx) => {
    return (
      <Button
        key={content.text}
        className={`${content.className} ${
          selectedHpDetailContent === idx ? 'selected' : ''
        }`}
        round="lg"
        onClick={() => handleButtonClick(idx)}
      >
        {content.icon}
        <Text>{content.text}</Text>
      </Button>
    );
  });

  const renderButtonsAtSm = contents.map((content, idx) => {
    return (
      <ButtonWrap key={content.text} onClick={() => handleButtonClick(idx)}>
        <Button
          className={`${content.className} ${
            selectedHpDetailContent === idx ? 'selected' : ''
          }`}
          round="lg"
        >
          {content.icon}
        </Button>
        <Text>{content.text}</Text>
      </ButtonWrap>
    );
  });

  return (
    <StyledSelectButtons className={className}>
      <ButtonsAtLg>{renderButtonsAtLg}</ButtonsAtLg>
      <ButtonsAtSm>{renderButtonsAtSm}</ButtonsAtSm>
    </StyledSelectButtons>
  );
}

const StyledSelectButtons = styled.div`
  width: 100%;

  button {
    border: 1px solid ${({ theme }) => theme.colors.redLighter};
    background-color: white;
    cursor: pointer;

    &.selected {
      background-color: ${({ theme }) => theme.colors.grayLight};
    }
  }

  .er-btn svg {
    color: ${({ theme }) => theme.colors.redDark};
  }

  .rt-btn svg {
    margin-right: 0.2rem;
    color: ${({ theme }) => theme.colors.grayDarker};

    @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      margin-right: 0;
    }
  }

  .sr-btn svg {
    color: ${({ theme }) => theme.colors.greenDark};
  }
`;

const ButtonsAtLg = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  button {
    display: inline-flex;
    align-items: center;

    svg {
      margin-right: 0.1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    display: none;
  }
`;

const ButtonsAtSm = styled.div`
  display: none;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-bottom: 0.2rem;
    border-radius: 50%;

    svg {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  display: inline-block;
  letter-spacing: calc(-1px + 0.1vw);
  word-spacing: -1px;
  font-size: calc(10px + 0.5vw);
  color: ${({ theme }) => theme.colors.grayDark};

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-weight: 600;
  }
`;

SelectButtons.propTypes = {
  className: PropTypes.string,
};

export default SelectButtons;

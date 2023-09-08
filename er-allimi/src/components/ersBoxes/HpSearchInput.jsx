import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Input, FiSearch, MatchedHpList } from '@components';
import { ersListState } from '@stores';

function HpSearchInput({ className }) {
  const [searchValue, setSearchValue] = useState('');
  const [showHpList, setShowHpList] = useState(false);
  const ersListData = useRecoilValue(ersListState);
  const container = useRef();

  useEffect(() => {
    // 검색창 외부를 클릭했을 때, 병원 목록 사라지게 하기
    const handleOutsideClick = (e) => {
      if (container.current && container.current.contains(e.target))
        return setShowHpList(true);

      return setShowHpList(false);
    };
    window.addEventListener('click', handleOutsideClick, true);

    return () => {
      window.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  let matchedHospitals = [];
  if (searchValue && ersListData)
    matchedHospitals = ersListData.filter((hpData) =>
      hpData.dutyName.includes(searchValue),
    );

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setShowHpList(true);
  };

  const StyledMatchedHpList = styled(MatchedHpList)`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
  `;

  return (
    <StyledHpSearchInput
      className={className}
      ref={container}
      searchValue={searchValue}
    >
      <Input
        value={searchValue}
        handleInputChange={handleInputChange}
        name="hpSearchValue"
        placeholder="의료 기관을 검색해 보세요."
        rightIcon={<FiSearch />}
        color={searchValue ? 'grayLight' : 'redLight'}
        round={searchValue ? 'sm' : 'lg'}
        className="HpSearchInput__input"
      />
      {showHpList && <StyledMatchedHpList data={matchedHospitals} />}
    </StyledHpSearchInput>
  );
}

const boxShadow = ({ theme, searchValue }) => {
  if (searchValue)
    return css`
      border-radius: 0.2rem;
      box-shadow: 0 0 5px 5px ${theme.colors.grayLight};
    `;
};

const StyledHpSearchInput = styled.div`
  position: relative;
  ${boxShadow}

  .HpSearchInput__input {
    ${({ theme }) => css`
      @media (max-width: ${theme.breakPoints.md}) {
        width: 100%;
      }
    `}
  }

  input {
    letter-spacing: 0.25px;
    font-weight: 600;
  }
`;

HpSearchInput.propTypes = {
  className: PropTypes.string,
};

export default HpSearchInput;

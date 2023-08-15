import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { BiSolidDownArrow, BiSolidUpArrow } from '@components';

function Dropdown({ label, data, select, handleOptionClick }) {
  const [expanded, setExpanded] = useState(false);
  const dropdown = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!dropdown.current || dropdown.current.contains(e.target)) return;
      setExpanded(false);
    };

    document.addEventListener('click', handler);

    return () => document.removeEventListener('click', handler);
  }, []);

  const handleDropdownClick = () => {
    setExpanded(!expanded);
  };

  const renderOptions = data.map((item, i) => {
    return (
      <Option key={item.label} onClick={() => handleOptionClick(i)}>
        {item.label}
      </Option>
    );
  });

  return (
    <StyledDropdown ref={dropdown} onClick={handleDropdownClick}>
      <Head>
        {select >= 0 ? data[select].label : label}
        {expanded ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
      </Head>
      <Body expanded={expanded}>{renderOptions}</Body>
    </StyledDropdown>
  );
}

const StyledDropdown = styled.div`
  position: relative;
  cursor: pointer;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: 0.3rem;
  font-size: 13px;

  svg {
    margin-left: 0.2rem;
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Body = styled.div`
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-top: none;
  border-radius: 0 0 0.3rem 0.3rem;
`;

const Option = styled.div`
  padding: 0.2rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
  font-size: 13px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayLighter};
  }

  &:last-child {
    border-bottom: none;
  }
`;

Dropdown.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array.isRequired,
  select: PropTypes.number.isRequired,
  handleOptionClick: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  label: '선택',
};

export default Dropdown;

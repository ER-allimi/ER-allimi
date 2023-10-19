import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { BiSolidDownArrow, BiSolidUpArrow } from '@components';
import { theme } from '@styles';

interface DropdownProps {
  label?: string;
  data: { label: string; value: number }[];
  select: number;
  handleOptionClick: (idx: number) => void;
  className?: string;
}

function Dropdown({
  label = '선택',
  data,
  select,
  handleOptionClick,
  className,
}: DropdownProps) {
  const [expanded, setExpanded] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);

  // 드롭다운 밖의 지점을 클릭할 경우 닫기
  useEffect(() => {
    const handler = (e: MouseEvent): undefined | void => {
      if (!dropdown.current || dropdown.current.contains(e.target as Node))
        return;
      setExpanded(false);
    };

    document.addEventListener('click', handler, true);

    return () => document.removeEventListener('click', handler, true);
  }, []);

  const handleDropdownClick = (): void => {
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
    <StyledDropdown
      className={className}
      ref={dropdown}
      onClick={handleDropdownClick}
    >
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
  font-size: 13px;
  cursor: pointer;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.5rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: 0.3rem;
  font-size: inherit;

  svg {
    margin-left: 0.2rem;
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

interface BodyProps {
  expanded: boolean;
}

const Body = styled.div<BodyProps>`
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-top: none;
  border-radius: 0 0 0.3rem 0.3rem;
  font-size: inherit;
`;

const Option = styled.div`
  padding: 0.2rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
  font-size: inherit;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayLighter};
  }

  &:last-child {
    border-bottom: none;
  }
`;

export default Dropdown;

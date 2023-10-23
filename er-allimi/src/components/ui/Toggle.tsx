import styled from '@emotion/styled';
import { theme } from '@styles';

interface Toggle {
  data: Array<{ label: string; value: string }>;
  select: 0 | 1;
  handleToggleClick: () => void;
  color?: keyof typeof theme.colors;
  className?: string;
  style?: React.CSSProperties;
}

function Toggle({
  data,
  select,
  handleToggleClick,
  color = 'gray',
  className,
  style,
}: Toggle) {
  const renderOptions = data.map((item) => {
    return <Option key={item.label}>{item.label}</Option>;
  });

  return (
    <StyledToggle className={className} color={color} style={style}>
      {renderOptions}
      <Stone onClick={handleToggleClick} select={select} />
    </StyledToggle>
  );
}

interface StyledToggleProps {
  color: keyof typeof theme.colors;
}

const StyledToggle = styled.div<StyledToggleProps>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 1rem;
  background-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: 2px 2px 3px 2px ${({ theme }) => theme.colors.grayLight};
  overflow: hidden;
`;

const Option = styled.div`
  padding: 0.3rem 0.6rem;
  word-spacing: -1px;
  font-size: 14px;
  font-weight: 700;
  color: white;

  &:nth-of-type(1) {
    text-align: right;
  }

  &:nth-of-type(2) {
    text-align: left;
  }
`;

interface StoneProps {
  select: 0 | 1;
}

const Stone = styled.div<StoneProps>`
  position: absolute;
  top: 0;
  left: ${({ select }) => (1 - select) * 50}%;
  width: 50%;
  height: 100%;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 5px 5px ${({ theme }) => theme.colors.grayLight};
  cursor: pointer;
  transition: left 0.3s ease-in;
`;

export default Toggle;

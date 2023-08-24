import PropTypes from 'prop-types';
import styled from '@emotion/styled';

function EmptyBox({ height, icon, children }) {
  return (
    <StyledEmptyBox height={height}>
      <Icon>{icon}</Icon>
      <Content>{children}</Content>
    </StyledEmptyBox>
  );
}

const StyledEmptyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  color: ${({ theme }) => theme.colors.gray};
`;

const Icon = styled.span`
  svg {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: inherit;
  }
`;

const Content = styled.div`
  font-size: 13px;
  color: inherit;
`;

EmptyBox.propTypes = {
  height: PropTypes.number, // 단위: px
  icon: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

EmptyBox.defaultProps = {
  height: 50,
  children: '내용을 입력하세요.',
};

export default EmptyBox;

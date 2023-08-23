import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Tooltip } from '@components';

function EtcSrIll({ data, className }) {
  return (
    <Tooltip
      className={className}
      direction="left"
      content={data}
      distanceAway={10}
      color="blue"
    >
      <StyledEtcSrIll>기타</StyledEtcSrIll>
    </Tooltip>
  );
}

const StyledEtcSrIll = styled.div`
  display: inline-block;
  padding: 0.4rem 0.3rem;
  border: 2px solid ${({ theme }) => theme.colors.yellowLighter};
  font-size: 12px;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.yellowDarker};
  }
`;

EtcSrIll.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

export default EtcSrIll;

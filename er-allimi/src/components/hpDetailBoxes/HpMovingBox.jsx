import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { MovingBox } from '@components';

function HpMovingBox({ className }) {
  return (
    <StyledMovingErsBox className={className}>
      하단 디테일 박스
    </StyledMovingErsBox>
  );
}
const StyledMovingErsBox = styled(MovingBox)`
    height: calc((100vh - 70px) / 2);
  `;
  
HpMovingBox.propTypes = {
  className: PropTypes.string,
};

export default HpMovingBox;

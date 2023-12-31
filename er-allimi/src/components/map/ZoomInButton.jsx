import styled from '@emotion/styled';
import { AiOutlinePlus } from '@components/icons';
import PropTypes from 'prop-types';

ZoomInButton.propTypes = {
  map: PropTypes.object,
};

function ZoomInButton({ map }) {
  const handleButtonClick = () => map.setLevel(map.getLevel() - 1);
  return (
    <Button onClick={handleButtonClick}>
      <AiOutlinePlus size="16" color="#222222"></AiOutlinePlus>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;

  width: 2rem;
  height: 2rem;
  background-color: #ffffff;
  border-radius: 3px 3px 0 0;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid rgb(226, 226, 226);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 2px 0px;
`;

export default ZoomInButton;

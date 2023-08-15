import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import logo from '@assets/logo.png';
import {
  FaMapMarkedAlt,
  AiOutlineInfoCircle,
  RxHamburgerMenu,
} from '@components';
import { PATH_ROOT } from '@constants';

function Navbar() {
  const location = useLocation();
  const [showSubNavbar, setShowSubNavbar] = useState(false);

  useEffect(() => {
    setShowSubNavbar(false);
  }, [location]);

  const handleBurgerClick = () => {
    setShowSubNavbar(!showSubNavbar);
  };

  return (
    <StyledNavbar>
      <Header>
        <Link to={PATH_ROOT}>
          <Logo>
            <img src={logo} alt="로고" />
          </Logo>
        </Link>
        <BurgerIcon onClick={handleBurgerClick} />
      </Header>
      <Utils show={showSubNavbar}>
        <Link to={PATH_ROOT}>
          <MapIcon />
          <Text>메인 화면</Text>
        </Link>
        <Link to="">
          <InfoIcon />
          <Text>응급실 알리미 소개 및 사용 방법</Text>
        </Link>
      </Utils>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.grayDarker};

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.sm}) {
      display: block;
      padding: 0;
    }
  `}
`;

const Header = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.sm}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      width: 100%;
    }
  `}
`;

const Logo = styled.div`
  padding: 0.3rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.redLight};

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: contain;
  }
`;

const Utils = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  margin-top: 3rem;

  & > a {
    display: flex;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      margin-top: 0;
    }
  `}

  ${({ theme, show }) => css`
    @media (max-width: ${theme.breakPoints.sm}) {
      position: absolute;
      top: calc(40px + 2rem);
      left: 0px;
      grid-template-columns: 1fr;
      row-gap: 1rem;
      padding: 2rem;
      width: 100%;
      visibility: ${show ? 'visible' : 'hidden'};
      opacity: ${show ? 1 : 0};
      background-color: ${show ? theme.colors.grayDarker : 'transparent'};
      ${show && `border-top: 1px solid ${theme.colors.grayLight};`}
    }
  `}
`;

const MapIcon = styled(FaMapMarkedAlt)`
  display: inline-block;
  font-size: 1.7rem;
  color: white;
`;

const InfoIcon = MapIcon.withComponent(AiOutlineInfoCircle);

const BurgerIcon = styled(RxHamburgerMenu)`
  display: none;
  font-size: 1.7rem;
  color: white;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.sm}) {
      display: inline-block;
      cursor: pointer;
    }
  `}
`;

const Text = styled.p`
  display: none;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.sm}) {
      display: block;
      margin-left: 1rem;
      color: white;
    }
  `}
`;

export default Navbar;

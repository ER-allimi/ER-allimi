import { useState, useEffect } from 'react';
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import logo from '@assets/logo.png';
import {
  FaMapMarkedAlt,
  AiOutlineInfoCircle,
  RxHamburgerMenu,
  PiArrowBendUpLeftBold,
  HpSearchInput,
} from '@components';
import { PATH_ROOT, PATH_HOSPITALDETAIL } from '@constants';

function Navbar() {
  const match = useMatch(PATH_HOSPITALDETAIL);
  const navigate = useNavigate();
  const location = useLocation();
  const [showSubNavbar, setShowSubNavbar] = useState(false);

  const backButton = Boolean(match);

  useEffect(() => {
    setShowSubNavbar(false);
  }, [location]);

  const handleBurgerClick = () => {
    setShowSubNavbar(!showSubNavbar);
  };

  const StyledHpSearchInput = styled(HpSearchInput)`
    display: none;

    ${({ theme, backButton }) => css`
      @media (max-width: ${theme.breakPoints.md}) {
        display: ${backButton ? 'none' : 'block'};
      }
    `}
  `;

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
      <Utils show={showSubNavbar} backButton={backButton}>
        <StyledHpSearchInput backButton={backButton} />
        {backButton && <BackIcon onClick={() => navigate(-1)} />}
        <Link to={PATH_ROOT}>
          <MapIcon />
          <Text>메인 화면</Text>
        </Link>
        <Link to="https://defiant-beard-9a5.notion.site/9664f7bb2cb24775b65ce273971aefe1?pvs=4">
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
      padding: 0.5rem 1rem;
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
      padding: 0.5rem 1rem;
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

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      width: 30px;
      height: 30px;
    }
  `}
`;

const Utils = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  row-gap: 2rem;
  margin-top: 3rem;

  & > a {
    display: flex;
  }

  ${({ theme, backButton }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      grid-template-columns: ${backButton
        ? 'repeat(3, 1fr)'
        : 'repeat(1, minmax(200px, 300px)) repeat(2, 1fr)'};
      column-gap: calc(0.5rem + 0.5vw);
      margin-top: 0;
      margin-left: 1rem;
    }
  `}

  ${({ theme, show }) => css`
    @media (max-width: ${theme.breakPoints.sm}) {
      position: absolute;
      top: calc(30px + 1rem);
      left: 0px;
      grid-template-columns: 1fr;
      row-gap: 1rem;
      margin-left: 0;
      padding: 1.5rem;
      width: 100%;
      visibility: ${show ? 'visible' : 'hidden'};
      opacity: ${show ? 1 : 0};
      background-color: ${show ? theme.colors.grayDarker : 'transparent'};
      ${show && `border-top: 1px solid ${theme.colors.grayLight};`}
      z-index: 2;
    }
  `}
`;

const MapIcon = styled(FaMapMarkedAlt)`
  display: inline-block;
  font-size: 1.7rem;
  color: white;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 1.3rem;
    }
  `}
`;

const InfoIcon = styled(AiOutlineInfoCircle)`
  display: inline-block;
  font-size: 1.7rem;
  color: white;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 1.3rem;
    }
  `}
`;

const BackIcon = styled(PiArrowBendUpLeftBold)`
  display: inline-block;
  font-size: 1.7rem;
  color: white;
  cursor: pointer;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 1.3rem;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.sm}) {
      display: none;
    }
  `}
`;

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

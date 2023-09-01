import logo from '@assets/logo.png';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PATH_ROOT } from '@constants';

function NotFoundPage() {
  const navigate = useNavigate();
  const currentPath = useParams();
  const handleBackClick = () => {
    console.log(currentPath);
    console.log(currentPath['*']);
    if (currentPath['*'] === 'not-found') {
      navigate(-2);
    } else {
      navigate(-1);
    }
  };
  return (
    <Container>
      <Logo>
        <img src={logo} alt="로고" />
      </Logo>
      <Description>
        <h1>원하시는 페이지를 찾을 수 없습니다.</h1>
        <p>
          찾으려는 페이지를 찾을 수 없습니다. <br /> 입력하신 주소가
          잘못되었거나, 이 페이지가 더 이상 이용 가능하지 않습니다. <br />
          주소를 다시 확인하거나, 다른 주소로 시도해주세요. <br /> 불편을 드려
          죄송합니다
        </p>
      </Description>
      <ButtonContainer>
        <Link to={PATH_ROOT}>
          <Button color="redLight" round="sm">
            메인으로
          </Button>
        </Link>
        <Button
          color="redLight"
          outline={true}
          round="sm"
          onClick={handleBackClick}
        >
          이전으로
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  padding: 0 5rem;
  gap: 4rem;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    padding: 0 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 0 2rem;
  }
`;

const Logo = styled.div`
  padding: 0.3rem;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.redLight};

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      width: 5rem;
      height: 5rem;
    }
  `}
`;

const Description = styled.div`
  text-align: center;
  p {
    white-space: pre-wrap;
    font-size: 13px;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.grayDark};

    @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
      font-size: 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      font-size: 11px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export default NotFoundPage;

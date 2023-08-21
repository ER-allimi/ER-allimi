import styled from '@emotion/styled';
import { AiTwotoneAlert } from '@components';

function HpMessageItem({ megType, msgContent, msgDate }) {
  return (
    <Container>
      <AiTwotoneAlert />
      <ContentContainer>
        <TitleText>
          {megType === '응급' ? '응급실 메시지' : '진료불가능 메시지'}
        </TitleText>
        <ContentText>{msgContent}</ContentText>
        <DateText>등록 일시 {msgDate}</DateText>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div``;
export default HpMessageItem;

import styled from '@emotion/styled';
import { Box, ErsContent } from '@components';

interface ErsBoxProps {
  className: string;
}

function ErsBox({ className }: ErsBoxProps) {
  const StyledErsBox = styled(Box)`
    min-height: 260px;
    max-height: calc(100vh - 200px);
  `;

  return (
    <StyledErsBox className={className}>
      <ErsContent />
    </StyledErsBox>
  );
}

export default ErsBox;

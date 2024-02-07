import { Box, HpInfoContent } from '@components';

interface HpInfoBoxProps {
  className: string;
}

function HpInfoBox({ className }: HpInfoBoxProps) {
  return (
    <Box className={className}>
      <HpInfoContent />
    </Box>
  );
}

export default HpInfoBox;

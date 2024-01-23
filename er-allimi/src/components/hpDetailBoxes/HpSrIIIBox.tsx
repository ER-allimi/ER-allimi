import { ClosedBox, BiBody } from '@components';
import { HpSrIllContent } from '@components';

interface HpSrIllBoxProps {
  className?: string;
}

function HpSrIIIBox({ className }: HpSrIllBoxProps) {
  return (
    <ClosedBox className={className} icon={<BiBody />}>
      <HpSrIllContent />
    </ClosedBox>
  );
}

export default HpSrIIIBox;

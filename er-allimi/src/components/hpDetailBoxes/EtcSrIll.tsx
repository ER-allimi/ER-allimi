import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Tooltip, Popover } from '@components';
import { ETC } from '@constants';
import type { BodyPartType } from '@constants';
import { theme } from '@styles';

interface EtcSrIllProps {
  data: Array<string>;
  displayedPopover: Array<{
    bodyPart: BodyPartType;
    showContent: boolean;
  }>;
  handlePopoverClick: (bodyPart: BodyPartType) => void;
  handleContentRemove: () => void;
  className?: string;
}

function EtcSrIll({
  data,
  displayedPopover,
  handlePopoverClick,
  handleContentRemove,
  className,
}: EtcSrIllProps) {
  return (
    <>
      <BodyPartAtLg className={className}>
        <Tooltip direction="left" content={data} distanceAway={10} color="blue">
          <StyledEtcSrIll>기타</StyledEtcSrIll>
        </Tooltip>
      </BodyPartAtLg>
      <BodyPartAtMd className={className}>
        <Popover
          direction="left"
          containerClassName="hpMovingBox"
          content={data}
          distanceAway={5}
          color="blue"
          showContent={
            !!displayedPopover.find((part) => part.bodyPart === ETC)
              ?.showContent
          }
          handlePopoverClick={() => handlePopoverClick(ETC)}
          handleContentRemove={handleContentRemove}
        >
          <StyledEtcSrIll
            showContent={
              !!displayedPopover.find((part) => part.bodyPart === ETC)
                ?.showContent
            }
          >
            기타
          </StyledEtcSrIll>
        </Popover>
      </BodyPartAtMd>
    </>
  );
}

interface showContentTrueProps {
  theme: typeof theme;
  showContent?: boolean;
}

const showContentTrue = ({ theme, showContent }: showContentTrueProps) => {
  if (showContent)
    return css`
      border: 2px solid ${theme.colors.yellowDarker};
    `;
};

interface StyledEtcSrIllProps {
  showContent?: boolean;
}

const StyledEtcSrIll = styled.div<StyledEtcSrIllProps>`
  display: inline-block;
  padding: 0.4rem 0.3rem;
  border: 2px solid ${({ theme }) => theme.colors.yellowLighter};
  font-size: 12px;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.yellowDarker};
  }

  ${showContentTrue}
`;

const BodyPartAtLg = styled.div`
  display: inline-block;

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    display: none;
  }
`;

const BodyPartAtMd = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    display: inline-block;
  }
`;

export default EtcSrIll;

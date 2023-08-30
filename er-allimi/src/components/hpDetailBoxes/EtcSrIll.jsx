import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Tooltip, Popover } from '@components';
import { ETC } from '@constants';

function EtcSrIll({
  data,
  displayedPopover,
  handlePopoverClick,
  handleContentRemove,
  className,
}) {
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
            displayedPopover.find((part) => part.bodyPart === ETC).showContent
          }
          handlePopoverClick={() => handlePopoverClick(ETC)}
          handleContentRemove={handleContentRemove}
        >
          <StyledEtcSrIll
            showContent={
              displayedPopover.find((part) => part.bodyPart === ETC).showContent
            }
          >
            기타
          </StyledEtcSrIll>
        </Popover>
      </BodyPartAtMd>
    </>
  );
}

const showContentTrue = ({ theme, showContent }) => {
  if (showContent)
    return css`
      border: 2px solid ${theme.colors.yellowDarker};
    `;
};

const StyledEtcSrIll = styled.div`
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

EtcSrIll.propTypes = {
  data: PropTypes.array.isRequired,
  displayedPopover: PropTypes.array.isRequired,
  handlePopoverClick: PropTypes.func.isRequired,
  handleContentRemove: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default EtcSrIll;

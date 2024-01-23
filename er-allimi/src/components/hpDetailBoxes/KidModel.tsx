import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Tooltip, Popover } from '@components';
import { KID_CHEST, KID_STOMACH, BodyPart } from '@constants';
import type { BodyPartType } from '@constants';
import kidModel from '@assets/kid-model.png';
import { theme } from '@styles';

interface BodyPartProps {
  data?: Array<string>;
  showContent: boolean;
  handlePopoverClick: () => void;
  handleContentRemove: () => void;
  className?: string;
}

interface KidModelProps {
  data: {
    [BodyPart.CHEST]: Array<string>;
    [BodyPart.STOMACH]: Array<string>;
  };
  displayedPopover?: BodyPartType;
  handlePopoverClick: (bodyPart: BodyPartType) => void;
  handleContentRemove: () => void;
}

function Body() {
  return <img src={kidModel} alt="kid-model" />;
}

function Chest({
  data,
  showContent,
  handlePopoverClick,
  handleContentRemove,
  className,
}: BodyPartProps) {
  return (
    <>
      <BodyPartAtLg className={className}>
        <Tooltip direction="left" content={data} distanceAway={15} color="blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="15"
            viewBox="0 0 28 15"
            fill="none"
          >
            <ellipse
              className="chest"
              cx="14"
              cy="7.5"
              rx="14"
              ry="7.5"
              fill="#FFEE54"
            />
          </svg>
        </Tooltip>
      </BodyPartAtLg>
      <BodyPartAtMd className={className}>
        <Popover
          direction="left"
          containerClassName="hpMovingBox"
          content={data}
          distanceAway={5}
          color="blue"
          showContent={showContent}
          handlePopoverClick={handlePopoverClick}
          handleContentRemove={handleContentRemove}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="15"
            viewBox="0 0 28 15"
            fill="none"
          >
            <ellipse
              className="chest"
              cx="14"
              cy="7.5"
              rx="14"
              ry="7.5"
              fill="#FFEE54"
            />
          </svg>
        </Popover>
      </BodyPartAtMd>
    </>
  );
}

function Stomach({
  data,
  showContent,
  handlePopoverClick,
  handleContentRemove,
  className,
}: BodyPartProps) {
  return (
    <>
      <BodyPartAtLg className={className}>
        <Tooltip direction="left" content={data} distanceAway={15} color="blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
          >
            <ellipse
              className="stomach"
              cx="14"
              cy="9"
              rx="14"
              ry="9"
              fill="#FFEE54"
            />
          </svg>
        </Tooltip>
      </BodyPartAtLg>
      <BodyPartAtMd className={className}>
        <Popover
          direction="left"
          containerClassName="hpMovingBox"
          content={data}
          distanceAway={5}
          color="blue"
          showContent={showContent}
          handlePopoverClick={handlePopoverClick}
          handleContentRemove={handleContentRemove}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
          >
            <ellipse
              className="stomach"
              cx="14"
              cy="9"
              rx="14"
              ry="9"
              fill="#FFEE54"
            />
          </svg>
        </Popover>
      </BodyPartAtMd>
    </>
  );
}

function KidModel({
  data,
  displayedPopover,
  handlePopoverClick,
  handleContentRemove,
}: KidModelProps) {
  return (
    <StyledKidModel>
      <Body />
      {data.chest.length !== 0 && (
        <StyledChest
          data={data.chest}
          showContent={displayedPopover === KID_CHEST}
          handlePopoverClick={() => handlePopoverClick(KID_CHEST)}
          handleContentRemove={handleContentRemove}
        />
      )}
      {data.stomach.length !== 0 && (
        <StyledStomach
          data={data.stomach}
          showContent={displayedPopover === KID_STOMACH}
          handlePopoverClick={() => handlePopoverClick(KID_STOMACH)}
          handleContentRemove={handleContentRemove}
        />
      )}
    </StyledKidModel>
  );
}

const StyledKidModel = styled.div`
  position: relative;

  .chest:hover,
  .stomach:hover {
    fill: ${({ theme }) => theme.colors.yellowDarker};
    fill-rule: nonzero;
  }
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

interface showContentTrueProp {
  theme: typeof theme;
  showContent: boolean;
}

const showContentTrue = ({ theme, showContent }: showContentTrueProp) => {
  if (showContent)
    return css`
      fill: ${theme.colors.yellowDarker};
    `;
};

const StyledChest = styled(Chest)`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);

  .chest {
    ${showContentTrue}
  }
`;

const StyledStomach = styled(Stomach)`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);

  .stomach {
    ${showContentTrue}
  }
`;

export default KidModel;

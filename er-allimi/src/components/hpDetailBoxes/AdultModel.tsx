import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Tooltip, Popover } from '@components';
import {
  ADULT_HEAD,
  ADULT_CHEST,
  ADULT_STOMACH,
  ADULT_ARM1,
  ADULT_ARM2,
  ADULT_LEG1,
  ADULT_LEG2,
  BodyPart,
} from '@constants';
import type { BodyPartType } from '@constants';
import adultModel from '@assets/adult-model.png';
import { theme } from '@styles';

interface BodyProps {
  className?: string;
}

interface BodyPartProps {
  data?: Array<string>;
  showContent: boolean;
  handlePopoverClick: () => void;
  handleContentRemove: () => void;
  className?: string;
}

interface AdultModelProps {
  data: {
    [BodyPart.HEAD]: Array<string>;
    [BodyPart.CHEST]: Array<string>;
    [BodyPart.STOMACH]: Array<string>;
    [BodyPart.LIMBS]: Array<string>;
  };
  displayedPopover: Array<{
    bodyPart: BodyPartType;
    showContent: boolean;
  }>;
  handlePopoverClick: (bodyPart: BodyPartType) => void;
  handleContentRemove: () => void;
}

function Body({ className }: BodyProps) {
  return <img src={adultModel} alt="adult-model" />;
}

function Head({
  data,
  showContent,
  handlePopoverClick,
  handleContentRemove,
  className,
}: BodyPartProps) {
  return (
    <>
      <BodyPartAtLg className={className}>
        <Tooltip direction="left" content={data} distanceAway={20} color="blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle
              className="head"
              cx="15.5"
              cy="15.5"
              r="15.5"
              fill="#FFEE54"
            />
          </svg>
        </Tooltip>
      </BodyPartAtLg>
      <BodyPartAtMd className={className}>
        <Popover
          direction="right"
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
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle
              className="head"
              cx="15.5"
              cy="15.5"
              r="15.5"
              fill="#FFEE54"
            />
          </svg>
        </Popover>
      </BodyPartAtMd>
    </>
  );
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
        <Tooltip direction="left" content={data} distanceAway={30} color="blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="17"
            viewBox="0 0 31 17"
            fill="none"
          >
            <ellipse
              className="chest"
              cx="15.5"
              cy="8.5"
              rx="15.5"
              ry="8.5"
              fill="#FFEE54"
            />
          </svg>
        </Tooltip>
      </BodyPartAtLg>
      <BodyPartAtMd className={className}>
        <Popover
          direction="right"
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
            width="31"
            height="17"
            viewBox="0 0 31 17"
            fill="none"
          >
            <ellipse
              className="chest"
              cx="15.5"
              cy="8.5"
              rx="15.5"
              ry="8.5"
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
        <Tooltip direction="left" content={data} distanceAway={30} color="blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="22"
            viewBox="0 0 31 22"
            fill="none"
          >
            <ellipse
              className="stomach"
              cx="15.5"
              cy="11"
              rx="15.5"
              ry="11"
              fill="#FFEE54"
            />
          </svg>
        </Tooltip>
      </BodyPartAtLg>
      <BodyPartAtMd className={className}>
        <Popover
          direction="right"
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
            width="31"
            height="22"
            viewBox="0 0 31 22"
            fill="none"
          >
            <ellipse
              className="stomach"
              cx="15.5"
              cy="11"
              rx="15.5"
              ry="11"
              fill="#FFEE54"
            />
          </svg>
        </Popover>
      </BodyPartAtMd>
    </>
  );
}

function Arm({
  data,
  showContent,
  handlePopoverClick,
  handleContentRemove,
  className,
}: BodyPartProps) {
  return (
    <>
      <BodyPartAtLg className={className}>
        <Tooltip direction="left" content={data} distanceAway={10} color="blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="44"
            viewBox="0 0 14 44"
            fill="none"
          >
            <path
              className="limb"
              d="M0 0H14V37C14 40.866 10.866 44 7 44C3.13401 44 0 40.866 0 37V0Z"
              fill="#FFEE54"
            />
          </svg>
        </Tooltip>
      </BodyPartAtLg>
      <BodyPartAtMd className={className}>
        <Popover
          direction="right"
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
            width="14"
            height="44"
            viewBox="0 0 14 44"
            fill="none"
          >
            <path
              className="limb"
              d="M0 0H14V37C14 40.866 10.866 44 7 44C3.13401 44 0 40.866 0 37V0Z"
              fill="#FFEE54"
            />
          </svg>
        </Popover>
      </BodyPartAtMd>
    </>
  );
}

function Leg({
  data,
  showContent,
  handlePopoverClick,
  handleContentRemove,
  className,
}: BodyPartProps) {
  return (
    <>
      <BodyPartAtLg className={className}>
        <Tooltip direction="left" content={data} distanceAway={10} color="blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="46"
            viewBox="0 0 17 46"
            fill="none"
          >
            <path
              className="limb"
              d="M0 0H17V38C17 42.4183 13.4183 46 9 46H8C3.58172 46 0 42.4183 0 38V0Z"
              fill="#FFEE54"
            />
          </svg>
        </Tooltip>
      </BodyPartAtLg>
      <BodyPartAtMd className={className}>
        <Popover
          direction="right"
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
            width="17"
            height="46"
            viewBox="0 0 17 46"
            fill="none"
          >
            <path
              className="limb"
              d="M0 0H17V38C17 42.4183 13.4183 46 9 46H8C3.58172 46 0 42.4183 0 38V0Z"
              fill="#FFEE54"
            />
          </svg>
        </Popover>
      </BodyPartAtMd>
    </>
  );
}

function AdultModel({
  data,
  displayedPopover,
  handlePopoverClick,
  handleContentRemove,
}: AdultModelProps) {
  return (
    <StyledAdultModel>
      <StyledBody />
      {data.head.length !== 0 && (
        <StyledHead
          data={data.head}
          showContent={
            !!displayedPopover.find((part) => part.bodyPart === ADULT_HEAD)
              ?.showContent
          }
          handlePopoverClick={() => handlePopoverClick(ADULT_HEAD)}
          handleContentRemove={handleContentRemove}
        />
      )}
      {data.chest.length !== 0 && (
        <StyledChest
          data={data.chest}
          showContent={
            !!displayedPopover.find((part) => part.bodyPart === ADULT_CHEST)
              ?.showContent
          }
          handlePopoverClick={() => handlePopoverClick(ADULT_CHEST)}
          handleContentRemove={handleContentRemove}
        />
      )}
      {data.stomach.length !== 0 && (
        <StyledStomach
          data={data.stomach}
          showContent={
            !!displayedPopover.find((part) => part.bodyPart === ADULT_STOMACH)
              ?.showContent
          }
          handlePopoverClick={() => handlePopoverClick(ADULT_STOMACH)}
          handleContentRemove={handleContentRemove}
        />
      )}
      {data.limbs.length !== 0 && (
        <Limbs
          showContent={displayedPopover.some((part) => {
            if (
              [ADULT_ARM1, ADULT_ARM2, ADULT_LEG1, ADULT_LEG2].includes(
                part.bodyPart,
              )
            ) {
              return part.showContent;
            }
          })}
        >
          <StyledArm1
            data={data.limbs}
            showContent={
              !!displayedPopover.find((part) => part.bodyPart === ADULT_ARM1)
                ?.showContent
            }
            handlePopoverClick={() => handlePopoverClick(ADULT_ARM1)}
            handleContentRemove={handleContentRemove}
          />
          <StyledArm2
            data={data.limbs}
            showContent={
              !!displayedPopover.find((part) => part.bodyPart === ADULT_ARM2)
                ?.showContent
            }
            handlePopoverClick={() => handlePopoverClick(ADULT_ARM2)}
            handleContentRemove={handleContentRemove}
          />
          <StyledLeg1
            data={data.limbs}
            showContent={
              !!displayedPopover.find((part) => part.bodyPart === ADULT_LEG1)
                ?.showContent
            }
            handlePopoverClick={() => handlePopoverClick(ADULT_LEG1)}
            handleContentRemove={handleContentRemove}
          />
          <StyledLeg2
            data={data.limbs}
            showContent={
              !!displayedPopover.find((part) => part.bodyPart === ADULT_LEG2)
                ?.showContent
            }
            handlePopoverClick={() => handlePopoverClick(ADULT_LEG2)}
            handleContentRemove={handleContentRemove}
          />
        </Limbs>
      )}
    </StyledAdultModel>
  );
}

const StyledAdultModel = styled.div`
  position: relative;

  .head:hover,
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

const StyledBody = styled(Body)`
  display: inline-block;
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

const StyledHead = styled(Head)`
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);

  .head {
    ${showContentTrue}
  }
`;

const StyledChest = styled(Chest)`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);

  .chest {
    ${showContentTrue}
  }
`;

const StyledStomach = styled(Stomach)`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);

  .stomach {
    ${showContentTrue}
  }
`;

interface LimbsProp {
  showContent: boolean;
}

const Limbs = styled.div<LimbsProp>`
  &:hover .limb {
    fill: ${({ theme }) => theme.colors.yellowDarker};
    fill-rule: nonzero;
  }

  .limb {
    ${showContentTrue}
  }
`;

const StyledArm1 = styled(Arm)`
  position: absolute;
  top: 63px;
  left: 18px;
`;

const StyledArm2 = styled(Arm)`
  position: absolute;
  top: 63px;
  left: 71px;
`;

const StyledLeg1 = styled(Leg)`
  position: absolute;
  top: 127px;
  left: 34px;
`;

const StyledLeg2 = styled(Leg)`
  position: absolute;
  top: 127px;
  left: 53px;
`;

export default AdultModel;

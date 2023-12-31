import PropTypes from 'prop-types';
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
} from '@constants';
import adultModel from '@assets/adult-model.png';

function Body({ className }) {
  return (
    // <svg
    //   className={className}
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   width="103"
    //   height="177"
    //   viewBox="0 0 103 177"
    //   fill="none"
    // >
    //   <rect width="103" height="177" fill="url(#pattern0)" />
    //   <defs>
    //     <pattern
    //       id="pattern0"
    //       patternContentUnits="objectBoundingBox"
    //       width="1"
    //       height="1"
    //     >
    //       <use
    //         xlinkHref="#image0_355_2"
    //         transform="matrix(0.00335634 0 0 0.00195312 -0.359223 0)"
    //       />
    //     </pattern>
    //     <image
    //       id="image0_355_2"
    //       width="512"
    //       height="512"
    //       xlinkHref="data:image/png;base64,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"
    //     />
    //   </defs>
    // </svg>
    <img src={adultModel} alt="adult-model" />
  );
}

function Head({
  data,
  showContent,
  handlePopoverClick,
  handleContentRemove,
  className,
}) {
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
}) {
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
}) {
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
}) {
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
}) {
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
}) {
  return (
    <StyledAdultModel>
      <StyledBody />
      {data.head.length !== 0 && (
        <StyledHead
          data={data.head}
          showContent={
            displayedPopover.find((part) => part.bodyPart === ADULT_HEAD)
              .showContent
          }
          handlePopoverClick={() => handlePopoverClick(ADULT_HEAD)}
          handleContentRemove={handleContentRemove}
        />
      )}
      {data.chest.length !== 0 && (
        <StyledChest
          data={data.chest}
          showContent={
            displayedPopover.find((part) => part.bodyPart === ADULT_CHEST)
              .showContent
          }
          handlePopoverClick={() => handlePopoverClick(ADULT_CHEST)}
          handleContentRemove={handleContentRemove}
        />
      )}
      {data.stomach.length !== 0 && (
        <StyledStomach
          data={data.stomach}
          showContent={
            displayedPopover.find((part) => part.bodyPart === ADULT_STOMACH)
              .showContent
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
              displayedPopover.find((part) => part.bodyPart === ADULT_ARM1)
                .showContent
            }
            handlePopoverClick={() => handlePopoverClick(ADULT_ARM1)}
            handleContentRemove={handleContentRemove}
          />
          <StyledArm2
            data={data.limbs}
            showContent={
              displayedPopover.find((part) => part.bodyPart === ADULT_ARM2)
                .showContent
            }
            handlePopoverClick={() => handlePopoverClick(ADULT_ARM2)}
            handleContentRemove={handleContentRemove}
          />
          <StyledLeg1
            data={data.limbs}
            showContent={
              displayedPopover.find((part) => part.bodyPart === ADULT_LEG1)
                .showContent
            }
            handlePopoverClick={() => handlePopoverClick(ADULT_LEG1)}
            handleContentRemove={handleContentRemove}
          />
          <StyledLeg2
            data={data.limbs}
            showContent={
              displayedPopover.find((part) => part.bodyPart === ADULT_LEG2)
                .showContent
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

const showContentTrue = ({ theme, showContent }) => {
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

const Limbs = styled.div`
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

AdultModel.propTypes = {
  data: PropTypes.object.isRequired,
  displayedPopover: PropTypes.array.isRequired,
  handlePopoverClick: PropTypes.func.isRequired,
  handleContentRemove: PropTypes.func.isRequired,
};

Body.propTypes = {
  className: PropTypes.string,
};

Head.propTypes = {
  data: PropTypes.array,
  showContent: PropTypes.bool.isRequired,
  handlePopoverClick: PropTypes.func.isRequired,
  handleContentRemove: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Chest.propTypes = {
  data: PropTypes.array,
  showContent: PropTypes.bool.isRequired,
  handlePopoverClick: PropTypes.func.isRequired,
  handleContentRemove: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Stomach.propTypes = {
  data: PropTypes.array,
  showContent: PropTypes.bool.isRequired,
  handlePopoverClick: PropTypes.func.isRequired,
  handleContentRemove: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Arm.propTypes = {
  data: PropTypes.array,
  showContent: PropTypes.bool.isRequired,
  handlePopoverClick: PropTypes.func.isRequired,
  handleContentRemove: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Leg.propTypes = {
  data: PropTypes.array,
  showContent: PropTypes.bool.isRequired,
  handlePopoverClick: PropTypes.func.isRequired,
  handleContentRemove: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default AdultModel;

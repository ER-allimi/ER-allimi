import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Tooltip, Popover } from '@components';
import { KID_CHEST, KID_STOMACH } from '@constants';
import kidModel from '@assets/kid-model.png';

function Body() {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   width="94"
    //   height="103"
    //   fill="none"
    // >
    //   <path fill="url(#a)" d="M0 0h94v103H0z" />
    //   <defs>
    //     <pattern
    //       id="a"
    //       width="1"
    //       height="1"
    //       patternContentUnits="objectBoundingBox"
    //     >
    //       <use xlinkHref="#b" transform="matrix(.00195 0 0 .00178 0 .044)" />
    //     </pattern>
    //     <image
    //       xlinkHref="data:image/png;base64,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"
    //       id="b"
    //       width="512"
    //       height="512"
    //     />
    //   </defs>
    // </svg>
    <img src={kidModel} alt="kid-model" />
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
}) {
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
}) {
  return (
    <StyledAKidModel>
      <Body />
      {data.chest.length !== 0 && (
        <StyledChest
          data={data.chest}
          showContent={
            displayedPopover.find((part) => part.bodyPart === KID_CHEST)
              .showContent
          }
          handlePopoverClick={() => handlePopoverClick(KID_CHEST)}
          handleContentRemove={handleContentRemove}
        />
      )}
      {data.stomach.length !== 0 && (
        <StyledStomach
          data={data.stomach}
          showContent={
            displayedPopover.find((part) => part.bodyPart === KID_STOMACH)
              .showContent
          }
          handlePopoverClick={() => handlePopoverClick(KID_STOMACH)}
          handleContentRemove={handleContentRemove}
        />
      )}
    </StyledAKidModel>
  );
}

const StyledAKidModel = styled.div`
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

const showContentTrue = ({ theme, showContent }) => {
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

KidModel.propTypes = {
  data: PropTypes.object.isRequired,
  displayedPopover: PropTypes.array.isRequired,
  handlePopoverClick: PropTypes.func.isRequired,
  handleContentRemove: PropTypes.func.isRequired,
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

export default KidModel;

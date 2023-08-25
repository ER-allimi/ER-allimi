import PropTypes from 'prop-types';
import { getErRTavailableBedByColor } from '@utils';
import styled from '@emotion/styled';
import bb, { gauge } from 'billboard.js';
import { useEffect, useRef } from 'react';

function ErChart({ availableBed, totalBed, hpid, title }) {
  const rate = Math.round((availableBed / totalBed) * 100);
  let isIsolation = false;
  if (title.includes('격리')) {
    isIsolation = true;
  }
  const colorByrate = getErRTavailableBedByColor(
    availableBed,
    totalBed,
    isIsolation,
  );
  const chartRef = useRef(null);
  useEffect(() => {
    const chart = bb.generate({
      data: {
        columns: [['가용병상', 0]],
        type: gauge(),
      },
      size: {
        width: 60,
        height: 100,
      },
      legend: {
        item: {
          tile: {
            width: 5,
            height: 5,
          },
        },
      },
      tooltip: {
        format: {
          value: function () {
            return availableBed + '자리';
          },
        },
      },
      gauge: {
        background: '#CCCCCC',
        label: {
          format: function (value) {
            return value >= 0 ? value + '%' : `0%`;
          },
        },
      },
      color: {
        pattern: [colorByrate],
      },
      bindto: chartRef.current,
    });

    setTimeout(function () {
      chart.load({
        columns: [['가용병상', rate]],
      });
    }, 500);
    return () => {
      chart.destroy();
    };
  }, [hpid]);

  return (
    <StyledChartContainer>
      <Chart>
        <div ref={chartRef} />
      </Chart>
      <TitleText>{title}</TitleText>
      <DataText>
        {availableBed >= 0 ? availableBed : `0(초과 ${-1 * availableBed})`} /{' '}
        {totalBed}
      </DataText>
    </StyledChartContainer>
  );
}
const StyledChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Chart = styled.div`
  .bb {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bb svg {
    height: 60px;
  }
  .bb-legend-item text {
    font-size: 5px;
    font-weight: 500;
  }

  .bb-tooltip-container {
    z-index: 1;
  }
  .bb-tooltip {
    background-color: ${({ theme }) => theme.colors.grayDarker};
    color: white;
    border-radius: 0.5rem;
    width: 100px;
    box-shadow: 3px 3px 5px 3px rgba(163, 163, 163, 26.67%);
    padding: 0.2rem;
  }
  .bb-chart-arcs-gauge-min,
  .bb-chart-arcs-gauge-max {
    font-size: 5px;
  }
  .bb-gauge-value {
    font-size: 8.5px !important;
    font-weight: 600;
  }
  .bb-tooltip-container .name,
  .bb-tooltip-container .value {
    font-size: 11px;
    font-weight: 500;
  }
  .bb-tooltip-container .name {
    top: 50px;
  }
  .bb-legend {
    transform: translate(10px, 25px);
  }
`;
const TitleText = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 11px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 10px;
  }
`;
const DataText = styled.div`
  font-size: 11px;
  font-weight: 600;
  height: 2rem;
  whitespace: 'pre-line';
  color: ${({ theme }) => theme.colors.grayDark};
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 9px;
  }
`;
ErChart.propTypes = {
  availableBed: PropTypes.number,
  totalBed: PropTypes.number,
  hpid: PropTypes.string,
  title: PropTypes.string,
};

export default ErChart;

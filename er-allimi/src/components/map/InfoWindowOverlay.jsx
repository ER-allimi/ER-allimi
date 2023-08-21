import { BsFillCircleFill } from '@components';
import PropTypes from 'prop-types';
import styles from '../../styles/mapOverlay/infoWindowOverlay.module.css';

InfoWindowOverlay.propTypes = {
  name: PropTypes.string.isRequired,
  availableBed: PropTypes.number,
  totalBed: PropTypes.number,
  markerColor: PropTypes.string.isRequired,
};

/** 호버시 기본정보를 나타내는 오버레이 */
function InfoWindowOverlay({ name, availableBed, totalBed, markerColor }) {
  return (
    <div className={styles.infoWindowContainer}>
      <div className={styles.infoWindowContent}>
        <h5 className={styles.hpName}>{name}</h5>
        {totalBed && (
          <div className={styles.bedData}>
            <BsFillCircleFill size={15} color={markerColor} />
            <div className={styles.bedDataText}>
              가용 병상 수&nbsp;&nbsp;
              {availableBed > 0 ? <span className={styles.bedDataTextNum}>{availableBed}</span> : <span className={styles.bedDataTextNum}>0(초과 {availableBed * -1})</span>}
              &nbsp;/&nbsp;전체&nbsp;
              <span className={styles.bedDataTextNum}>{totalBed}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoWindowOverlay;

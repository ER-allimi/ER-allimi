import { FaMapMarker, BsFillCircleFill } from '@components';
import PropTypes from 'prop-types';
import styles from '../../styles/mapOverlay/erMarkerOverlay.module.css';

ErMarkerOverlay.propTypes = {
  name: PropTypes.string.isRequired,
  availableBed: PropTypes.number,
  totalBed: PropTypes.number,
  markerColor: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
};

/** 색상과 순번을 표현하는 마커와 호버시 기본정보를 나타내는 오버레이 */
function ErMarkerOverlay({ name, availableBed, totalBed, markerColor, order }) {
  return (
    <div className={styles.container}>
      <div className={styles.markerContainer}>
        <FaMapMarker size={38} color={markerColor} />
        <p className={styles.markerText}>{order}</p>
        <div className={styles.infoWindowContainer}>
          <div className={styles.infoWindowContent}>
            <h5 className={styles.hpName}>{name}</h5>
            {availableBed && totalBed && (
              <div className={styles.bedData}>
                <BsFillCircleFill size={15} color={markerColor} />
                <div className={styles.bedDataText}>
                  가용 병상 수&nbsp;&nbsp;
                  <span className={styles.num}>{availableBed}</span>
                  &nbsp;/&nbsp;전체&nbsp;
                  <span className={styles.num}>{totalBed}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErMarkerOverlay;

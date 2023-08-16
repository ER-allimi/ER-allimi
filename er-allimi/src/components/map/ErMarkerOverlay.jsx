import { FaMapMarker } from '@components/icons';
import PropTypes from 'prop-types';
import styles from '../../styles/mapOverlay/erMarkerOverlay.module.css'

ErMarkerOverlay.propTypes = {
  markerColor: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
};

/** 색상과 순번을 표현하는 마커 오버레이 */
function ErMarkerOverlay({ markerColor, order }) {
  return (
    <div className={styles.markerContainer}>
      <FaMapMarker size={38} color={markerColor} />
      <p className={styles.markerText}>{order}</p>
    </div>
  );
}

export default ErMarkerOverlay;

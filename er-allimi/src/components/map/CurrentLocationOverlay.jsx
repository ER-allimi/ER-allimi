import styles from '../../styles/mapOverlay/currentLocationOverlay.module.css'

/** 현재 위치를 나타내는 원 오버레이 */
function CurrentLocationOverlay() {
  return <div className={styles.currentLocationCircle}></div>;
}

export default CurrentLocationOverlay;

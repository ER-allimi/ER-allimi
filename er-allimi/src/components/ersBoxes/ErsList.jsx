import PropTypes from 'prop-types';
import { ErItem } from '@components';

function ErsList({ className }) {
  const renderErItems = Array(15)
    .fill(0)
    .map((item, i) => {
      return <ErItem key={i} />;
    });

  return <div className={className}>{renderErItems}</div>;
}

ErsList.propTypes = {
  className: PropTypes.string,
};

export default ErsList;

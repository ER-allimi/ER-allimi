import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import PropTypes from 'prop-types';
import { ErItem } from '@components';
import { sortedErsWithRadiusState, ersPaginationState } from '@stores';
import { ERS_CNT_PER_PAGE } from '@constants';

function ErsList({ className }) {
  const ersList = useRef();
  const data = useRecoilValue(sortedErsWithRadiusState);
  const page = useRecoilValue(ersPaginationState);

  useEffect(() => {
    ersList.current.scrollTo(0, 0);
  }, [page]);

  const start = (page - 1) * ERS_CNT_PER_PAGE;
  const end = page * ERS_CNT_PER_PAGE;
  const dataPerPage = data.slice(start, end);

  const renderErItems =
    dataPerPage &&
    dataPerPage.map((item, idx) => {
      return (
        <ErItem key={item.hpInfo.hpid} item={item} order={start + idx + 1} />
      );
    });

  return (
    <div className={className} ref={ersList}>
      {renderErItems}
    </div>
  );
}

ErsList.propTypes = {
  className: PropTypes.string,
};

export default ErsList;

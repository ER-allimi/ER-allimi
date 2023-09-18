import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import PropTypes from 'prop-types';
import { ErItem, EmptyBox, TbHomeOff, Skeleton } from '@components';
import { sortedErsWithRadiusState, ersPaginationState } from '@stores';
import { ERS_CNT_PER_PAGE } from '@constants';
import { useOutletContext } from 'react-router-dom';

function ErsList({ className }) {
  const isFetchingData = useOutletContext()
  const ersList = useRef();
  const data = useRecoilValue(sortedErsWithRadiusState);
  const page = useRecoilValue(ersPaginationState);

  useEffect(() => {
    if (ersList.current) {
      ersList.current.scrollTo(0, 0);
    }
  }, [page]);

  if (isFetchingData) {
    return (
      <>
        <Skeleton isWithAvailableBed={true} />
        <Skeleton isWithAvailableBed={true} />
        <Skeleton isWithAvailableBed={true} />
      </>
    );
  }

  const start = (page - 1) * ERS_CNT_PER_PAGE;
  const end = page * ERS_CNT_PER_PAGE;
  const dataPerPage = data.slice(start, end);

  const renderErItems =
    dataPerPage.length === 0 ? (
      <EmptyBox height={130} icon={<TbHomeOff />}>
        이 위치 주변에는 응급실이 없습니다.
      </EmptyBox>
    ) : (
      dataPerPage.map((item, idx) => {
        return (
          <ErItem key={item.hpInfo.hpid} item={item} order={start + idx + 1} />
        );
      })
    );

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

import { selector } from 'recoil';
import { ersWithRadiusState, sortingState } from '@stores';
import { SORTING_DISTANCE, SORTING_AVAILABLE_BED } from '@constants';

// 반경 내 응급실 목록 찾은 후, 정렬된 값을 반환
const sortedErsWithRadiusState = selector({
  key: 'sortedErsWithRadiusState',
  get: ({ get }) => {
    const ersWithRadius = get(ersWithRadiusState);
    const sorting = get(sortingState);

    if (ersWithRadius.length === 0) return [];

    let sortedErsWithRadius;
    switch (sorting) {
      case SORTING_DISTANCE: // 거리에 따라 오름차순 정렬
        sortedErsWithRadius = [...ersWithRadius].sort(
          (a, b) => a.distanceFromLocation - b.distanceFromLocation,
        );
        break;
      case SORTING_AVAILABLE_BED: // (응급실 일반) 가용 병상 개수에 따라 내림차순 정렬
        sortedErsWithRadius = [...ersWithRadius].sort((a, b) => {
          const aInfo = a.availableBedInfo?.hvec;
          const bInfo = b.availableBedInfo?.hvec;

          if (!aInfo) return 1; // 젤 끝에 위치
          if (!bInfo) return -1; // 젤 끝에 위치

          return bInfo - aInfo;
        });
        break;
      default:
        sortedErsWithRadius = ersWithRadius;
    }

    return sortedErsWithRadius;
  },
});

export { sortedErsWithRadiusState };

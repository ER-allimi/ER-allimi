import { createBrowserRouter } from 'react-router-dom';
import { PATH_ROOT, PATH_CHARTVIEW, PATH_HOSPITALDETAIL } from '@constants';
import App from './App';
import { MapView, ChartView, HpDetailPage, Chart } from '@pages';

const router = createBrowserRouter([
  {
    path: PATH_ROOT,
    element: <App />,
    children: [
      {
        index: true,
        element: <MapView />, // MapView > 지도 + ersBoxes
      },
      {
        path: PATH_HOSPITALDETAIL,
        element: <HpDetailPage />, // HpDetailPage > 지도 + HpDetailBoxes
      },
      // {
      //     path: PATH_CHARTVIEW,
      //     element: <ChartView />,  // ChartView > chart + ersBoxes
      //     children: [
      //         {
      //             index: true,
      //             element: <Chart />,
      //         },
      //     ]
      // },
    ],
  },
]);

export { router };

import { createBrowserRouter } from "react-router-dom";
import {
    PATH_ROOT,
    PATH_CHARTVIEW,
    PATH_HOSPITALDETAIL,
} from '@constants';
import App from './App';
import { 
    MapView, 
    ChartView,
    HpDetailPage,
    Chart 
} from '@pages';

const router = createBrowserRouter([
    {
        path: PATH_ROOT,
        element: <App />,
        // children: [
        //     {
        //         element: <MapView />,    // MapView > 지도
        //         children: [
        //             {
        //                 index: true,
        //                 element: <ErsBoxes />,    // 현 위치 박스 & 내 주변 응급실 박스
        //             },
        //             {
        //                 path: PATH_HOSPITALDETAIL,
        //                 element: <HpDetailBoxes />,    // 현 위치 박스 & 응급실 상세 페이지 내 박스들
        //             }
        //         ],
        //     },
        //     {
        //         path: PATH_CHARTVIEW,
        //         element: <ChartView />,  // ChartView > 현 위치 박스 & 내 주변 응급실 박스
        //         children: [
        //             {
        //                 index: true,
        //                 element: <Chart />,    // 차트 
        //             },
        //         ]
        //     },
        // ],
        children: [
            {
                index: true,
                element: <MapView />,    // MapView > 지도 + ersBoxes
            },
            {
                path: PATH_HOSPITALDETAIL,
                element: <HpDetailPage />,    // HpDetailPage > 지도 + HpDetailBoxes
            },
            {
                path: PATH_CHARTVIEW,
                element: <ChartView />,  // ChartView > chart + ersBoxes
                children: [
                    {
                        index: true,
                        element: <Chart />,   
                    },
                ]
            },
        ]
    }
])

export { router };
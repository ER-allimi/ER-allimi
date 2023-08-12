import axios from 'axios';

const key = import.meta.env.VITE_SERVICE_KEY;
const serviceKey = encodeURI(key);

const getSrIllAccept = async function({ STAGE1, STAGE2 }) {
    const res = await axios({
        url: 'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getSrsillDissAceptncPosblInfoInqire',
        method: 'GET',
        params: {
            serviceKey,
            STAGE1,
            STAGE2
        }
    })

    return res.data.response.body.items?.item;
};

export { getSrIllAccept };
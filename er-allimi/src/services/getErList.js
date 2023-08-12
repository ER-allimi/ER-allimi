import axios from 'axios';

const key = import.meta.env.VITE_SERVICE_KEY;
const serviceKey = encodeURI(key);

const getErList = async function() {
    const res = await axios({
        url: 'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytListInfoInqire',
        method: 'GET',
        params: {
            serviceKey,
        }
    })
    console.log(res)
};

export { getErList };
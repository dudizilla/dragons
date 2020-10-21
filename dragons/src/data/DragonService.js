import axios from 'axios';

const dragonsService = {
    getDragons: async () => {
        return axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
        .then(res => {
            const dragons = res.data;
            return dragons.sort();
        })
    }
};

export default dragonsService;

import axios from 'axios';

const dragonsService = {
  getDragons: async () => {
    return axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
      .then(res => {
        const dragons = res.data;
        return dragons.sort((function (a, b) {
          return a.name.localeCompare(b.name);
        }));
      })
  },

  postDragons: async (data) => {
    axios.post('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon',
      {
        name: data.name,
        type: data.type,
      }
    )
      .then(res => {
        return res.data
      }).catch(Error);
  }
};

export default dragonsService;

import axios from 'axios';

export const getHomeDataType = async (type: string) => (
    axios.get(`http://localhost:3001/api/home/${type}`)
    .then(function (response) {
        console.log(`http://localhost:3001/api/home/${type}`)
        return response.data;
    })
    .catch(function (error) {
      console.log(error);
    }) 
)
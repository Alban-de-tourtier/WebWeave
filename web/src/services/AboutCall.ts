import axios from 'axios';

export const getAboutDataType = async (type: string) => (
    axios.get(`http://localhost:3001/api/about/${type}`)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
      console.log(error);
    }) 
)
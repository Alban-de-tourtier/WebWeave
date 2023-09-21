import axios from 'axios';

export const getContactDataType = async (type: string) => (
    axios.get(`http://localhost:3001/api/contact/${type}`)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
      console.log(error);
    }) 
)
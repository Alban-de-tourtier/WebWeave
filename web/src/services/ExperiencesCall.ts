import axios from 'axios';

export const getExperiencesDataType = async (type: string) => (
    axios.get(`http://localhost:3001/api/experiences/${type}`)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
      console.log(error);
    }) 
)
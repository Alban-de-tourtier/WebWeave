import axios from 'axios';

export const getExperiencesDataType = async (type: string) => (
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/experiences/${type}`)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
      console.log(error);
    }) 
)
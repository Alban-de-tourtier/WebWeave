import axios from 'axios';

export const getHomeDataType = async (type: string) => (
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/home/${type}`)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
      console.log(error);
    }) 
)
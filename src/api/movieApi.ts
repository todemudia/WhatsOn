import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
  headers: {
    Authorization: import.meta.env.VITE_TOKEN
  }
});

const nowPlaying = '/movie/now_playing';

export const getUser = async () => {
  try {
    const response = await instance.get(nowPlaying);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

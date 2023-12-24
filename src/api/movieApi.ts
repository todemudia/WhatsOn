import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
  headers: {
    Authorization: import.meta.env.VITE_TOKEN
  }
});

const NOW_PLAYING = '/movie/now_playing';
const POPULAR = '/movie/popular';
const TOP_RATED = '/movie/top_rated';
const UPCOMING = '/movie/upcoming';

export const getNowPlaying = async () => {
  try {
    const response = await instance.get(NOW_PLAYING);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getPopular = async () => {
  try {
    const response = await instance.get(POPULAR);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getTopRated = async () => {
  try {
    const response = await instance.get(TOP_RATED);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getUpcoming = async () => {
  try {
    const response = await instance.get(UPCOMING);
    return response.data;
  } catch (error) {
    return error;
  }
};

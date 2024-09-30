import axios from 'axios';
import { MovieListResponse } from '../interfaces/MovieListResponse.interface';
import { MovieType } from '../interfaces/MovieResponse.interface';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    Authorization: import.meta.env.VITE_TOKEN
  }
});

const NOW_PLAYING = '/movie/now_playing';
const POPULAR = '/movie/popular';
const TOP_RATED = '/movie/top_rated';
const UPCOMING = '/movie/upcoming';
const MOVIE = '/movie';

const getData = async <T>(endpoint: string): Promise<T> => {
  const response = await instance.get(endpoint);
  return response.data;
};

export const getNowPlaying = (): Promise<MovieListResponse> =>
  getData<MovieListResponse>(NOW_PLAYING);
export const getPopular = (): Promise<MovieListResponse> =>
  getData<MovieListResponse>(POPULAR);
export const getTopRated = (): Promise<MovieListResponse> =>
  getData<MovieListResponse>(TOP_RATED);
export const getUpcoming = (): Promise<MovieListResponse> =>
  getData<MovieListResponse>(UPCOMING);
export const getMovie = (movieId: string): Promise<MovieType> =>
  getData<MovieType>(`${MOVIE}/${movieId}`);

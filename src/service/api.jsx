import axios from 'axios';
const API_KEY = 'b3d1290dd01e3b949b1b918aa5e983aa';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'day';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const fetchTrendingToday = async () => {
  try {
    const response = await axios.get(`trending/${MEDIA_TYPE}/${TIME_WINDOW}`, {
      params: {
        api_key: API_KEY,
        include_adult:false,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async movieId => {
  try {
    const ID = Number(movieId);
    const response = await axios.get(`movie/${ID}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCast = async id => {
  try {
    const response = await axios.get(`movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async id => {
  try {
    const response = await axios.get(`movie/${id}/reviews`, {
      
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieBySearch = async query => {
  try {
    const response = await axios.get(`search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        include_adult:false,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};


/*
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://api.themoviedb.org/3/movie/changes?page=1")
  .get()
  .addHeader("accept", "application/json")
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2QxMjkwZGQwMWUzYjk0OWIxYjkxOGFhNWU5ODNhYSIsInN1YiI6IjY1NjgzOGYzMDljMjRjMDBlMTlmMjE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xg39NZpPlsCXG3z8RIl7eXpDSDKFKN5aOi4t-OolMOk")
  .build();

Response response = client.newCall(request).execute();
*/
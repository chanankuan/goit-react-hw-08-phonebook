import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (formData, ThunkAPI) => {
    try {
      const response = await axios.post('/users/signup', formData);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (formData, ThunkAPI) => {
    try {
      const response = await axios.post('/users/login', formData);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue('Unable to login');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, ThunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    token.unset();
    return response.data;
  } catch (error) {
    return ThunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, ThunkAPI) => {
    const state = ThunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return ThunkAPI.rejectWithValue('Unable to fetch user');
    }

    token.set(persistedToken);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

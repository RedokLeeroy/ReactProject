import axios from 'axios';
export const API = axios.create({
  baseURL: 'https://kapusta-backend.goit.global',
});

export const tokenAuth = {
  set(accessToken) {
    API.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = ``;
  },
};

import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import axios from "axios";

axios.defaults.baseURL =
  'https://pixabay.com/api?key=29581970-ca9e55c9ea9a40620816915df';

async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
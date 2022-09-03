import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import axios from "axios";
import renderGallery from './renderGallery';




axios.defaults.baseURL =
    'https://pixabay.com/api?key=29581970-ca9e55c9ea9a40620816915df';
  
const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryEl: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.load-more'),
  
};

let page = 1;
let query = '';

refs.searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
    e.preventDefault();
    
    //if (query === e.target.elements.query.value) return;

    query = e.target.value.trim();

    if (!query) return;


}
async function fetch() {
  try {
    const response = await axios.get(`?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
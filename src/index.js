import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import axios from "axios";
import renderGallery from './renderGallery';




axios.defaults.baseURL =
    'https://pixabay.com/api?key=29581970-ca9e55c9ea9a40620816915df';


    

//   async function fetch(query,page) {
//   try {
//       const response = await axios.get
//           (`&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
//       console.log(response);
      
//       return response;
//   } catch (error) {
//     console.error(error);
//   }
// }  
  
const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryEl: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.load-more'),
  
};
const DEFAULT_CURRENT_PAGE = 1;

let isLoad = false;
let items = [];
let page = 1;
let query = '';
let currentPage = DEFAULT_CURRENT_PAGE;

refs.searchForm.addEventListener('submit', onSearchForm);

const loaderOn = () => refs.btnLoadMore.classList.add('visible');

const loaderOff = () => refs.btnLoadMore.classList.remove('visible');


const fetchData = async () => {
  isLoad = true;
  loaderOn();

  try {
    const response = await axios.get
          (`&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
       console.log(response);
    
    const data = await response.json();

    // const { data } = await axios.get(
    //   `&q=${query}&per_page=${HITS_PER_PAGE}&page=${currentPage}`,
    // );

    // then
    items = [...items, data.hits];
    totalPages = data.totalHits / HITS_PER_PAGE;
    renderList(data.hits);
  } catch (error) {
    console.log(error.message);
  }

  // finally
  loaderOff();
  isLoad= false;
};


function onSearchForm(e) {
    e.preventDefault();
    
    // if (query === e.target.elements.searchQuery.value) return;

    query = e.target.searchQuery.value.trim();

    refs.galleryEl.innerHTML = '';

    currentPage = DEFAULT_CURRENT_PAGE;     
    
    //currentHits = response.hits.length; 


    if (!query) return;

     fetchData();

}

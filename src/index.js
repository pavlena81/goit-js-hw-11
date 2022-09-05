import './css/styles.css';

// Описан в документации
import simpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCards from './fetchCards';

import renderGallery from './renderGallery';

  
const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.load-more'),
    inputEl: document.querySelector('input'),    
};

const myButton = document.getElementById('myBtn');
console.log(refs)
const DEFAULT_CURRENT_PAGE = 1;


let page = 1;
let query = '';

let currentHits = 0;



refs.searchForm.addEventListener('submit', onSearchForm);
refs.btnLoadMore.addEventListener('click', onBtnLoadMore); 

// refs.btnLoadMore.classList.add('is-hidden');
const loaderOn = () => refs.btnLoadMore.classList.add('visible');

const loaderOff = () => refs.btnLoadMore.classList.remove('visible');

function addCards(value, page){
       fetchCards(value, page)
           .then(data => {
               console.log(data)
              if (data.hits.length > 0) {
                   Notify.success(`Hooray! We found ${data.totalHits} images.`)
                refs.gallery.insertAdjacentHTML('beforeend',renderGallery(data.hits))
                  gallery.refresh();	
                   console.log(renderGallery(data.hits));
               } else
                   Notify.failure(`Sorry, there are no images matching your search query. Please try again.`)
                   refs.btnLoadMore.classList.add('is-hidden');
                ;
                  
               if (data.totalHits > 40) {
                  refs.btnLoadMore.classList.remove('is-hidden');                   
               }
            
           });
 }

 
function onSearchForm(e) {
    e.preventDefault();
    console.log('hurray')
     

    query = e.target.searchQuery.value.trim();
    page = 1;
    refs.gallery.innerHTML = '';
    if (query === '') {
        refs.btnLoadMore.classList.add('is-hidden');
        return Notify.info('The search string cannot be empty. Please specify your search query.');
         
    }
      //if (query === e.target.elements.searchQuery.value) return;   
    else {
        addCards(query, page);
    }

   
}

function onBtnLoadMore(e) {
    query = refs.inputEl.value.trim();
         
         page += 1;
         fetchCards(query, page)
           .then(data => {
               console.log(data)
              if (data.hits.length > 0) {
                   
                refs.gallery.insertAdjacentHTML('beforeend',renderGallery(data.hits))
                 gallery.refresh(); 
                   console.log(renderGallery(data.hits));
               } 
               
               if (data.totalHits <= page * 40  ) {
                   refs.btnLoadMore.classList.add('is-hidden');
                   return Notify.info(`We're sorry, but you've reached the end of search results.`);
               }
               
           })
                    
}
  //simplelightbox
let gallery = new SimpleLightbox('.gallery a', {
    captionPosition: `bottom`,
    captionsData: "alt",
    captionDelay: 250,
});

// When the user scrolls down 20px from the top of the document, show the myButton
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
}

// When the user clicks on the myButton, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
   


//   if (response.totalHits > 40) {
//     btnLoadMore.classList.remove('is-hidden');
    
//   } else {
//     btnLoadMore.classList.add('is-hidden');
    
//   }

//   try {
//     if (response.totalHits > 0) {
//       Notify.success(`Hooray! We found ${response.totalHits} images.`);
//       refs.gallery.innerHTML = '';
//       renderGallery(response.hits);
      
//     }

//     if (response.totalHits === 0) {
//       refs.gallery.innerHTML = '';
//       Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//         btnLoadMore.classList.add('is-hidden');
        
//     }
//   } catch (error) {
//     console.log(error);
//   }


    



 

 


     




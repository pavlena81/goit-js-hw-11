import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCards from './fetchCards';

import renderGallery from './renderGallery';

  
const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.load-more'),
  
};
console.log(refs)
const DEFAULT_CURRENT_PAGE = 1;


let page = 1;
let query = '';

let currentHits = 0;
function onBtnLoadMore() {
        page += 1;
        
    }
refs.searchForm.addEventListener('submit', onSearchForm);
refs.btnLoadMore.addEventListener('click', onBtnLoadMore); 


const loaderOn = () => refs.btnLoadMore.classList.add('visible');

const loaderOff = () => refs.btnLoadMore.classList.remove('visible');

function addCards(value, page){
       fetchCards(value, page)
           .then(data => {
               console.log(data)
              if (data.hits.length > 0) {
                   Notify.success('Hooray! We found ${data.totalHits} images.')
                refs.gallery.insertAdjacentHTML('beforeend',renderGallery(data.hits))
                  
                   console.log(renderGallery(data.hits));
               } else
                   Notify.failure('Sorry, ');
               if (data.totalHits > 40) {
                   btnLoadMore.classList.remove('is-hidden');
               }
           });
 }


 function onSearchForm(e) {
    e.preventDefault();
    console.log('hurray')
    // if (query === e.target.elements.searchQuery.value) return;

    query = e.target.searchQuery.value.trim();

    refs.gallery.innerHTML = '';

        
    
     addCards(query,page); 
    
   
//     if (query === '') {
//         return Notify.info(
//             'The search string cannot be empty. Please specify your search query.'
//         );
//     }
//     const response = await fetchCards(query, page);
//      currentHits = response.hits.length;

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


    // if (!query) return;
    //     addCards();   
    }


//    function addCards(value, page){
//        fetchCards(value, page)
//            .then(data => {
//                if (data.hits.length > 0) {
//                    Notify.success('Hooray! We found ${data.totalHits} images.'
//                    )
//                    renderGallery(data.hits);
//                } else
//                    Notify.failure('Sorry, ');
//                if (data.totalHits > perPage) {
//                    loadMoreBtn.classList.remove('is-hidden');
//                }
//            });
// }

 
//    refs.searchForm.addEventListener("submit", async () => {
//   try {
//     const users = await fetchCards();
//     renderGallery(images);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// async function fetchCards() {
 

//   const users = await Promise.all(arrayOfPromises);
//   return users;
// }


//             if (response.totalHits === 0) {
//                 return Notify.failure(
//  'Sorry, there are no images matching your search query. Please try again.'
//        )
//    } else {
//        renderGallery(data.hits);
//        return Notify.failure('Hooray! We found ${data.totalHits} images.');          
//    }
    
     



// const fetchData = async () => {
//   isLoad = true;
//   loaderOn();

//   try {
//     const response = await axios.get
//           (`&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
//        console.log(response);
    
//     //        
     
//      const { data } = await axios.get(
//        `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`,
//      );
         
    
//      // images = [...images, data.hits];
//     //  
//     totalPages = data.totalHits ;
//     renderGallery(data.hits);
//   } catch (error) {
//     console.log(error.message);
//   }

//   // finally
//   loaderOff();
//   isLoad= false;
// };

import axios from 'axios';
const API_KEY = '29581970-ca9e55c9ea9a40620816915df';
async function fetchCards(value, page) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export default fetchCards;



// import axios from "axios";


// // axios.defaults.baseURL =
// //     'https://pixabay.com/api?key=29581970-ca9e55c9ea9a40620816915df';    

//   async function fetchCards(value, page) {
//     try {
//         const response = await axios.get
//             (`https://pixabay.com/api?key=29581970-ca9e55c9ea9a40620816915df&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
//         console.log(response);
      
//         return response.data;
//     }
//     catch (error) {
//     console.log(error.message);
//   }
// }
// export default fetchCards;
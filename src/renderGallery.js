export default function renderGallery(images) {
     
    const markup = images
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
            return `
    <div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
            <a href="${largeImageURL}">
            <p class="info-item">
            <b>Likes</b>${likes}
            </p>
            <p class="info-item">
             <b>Views</b>${views}
            </p>
            <p class="info-item">
            <b>Comments</b>${comments}
            </p>
            <p class="info-item">
            <b>Downloads</b>${downloads}            
            </p>
        </div>
    </div>
      `;
        })
    .join("");
  //return markup;
//  return countryList.innerHTML = markup;
    refs.gallery.insertAdjacentHTML('beforeend', markup);
};


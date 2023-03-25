import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItemEl = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItemEl);

function createGalleryItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li><a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li>`
    )
    .join('');
}

let lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

lightBox.on('show.simplelightbox', function () {
  console.log(lightBox);
});

lightBox.on('error.simplelightbox', function (event) {
  console.log(event); // some usefull information
});
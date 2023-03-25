import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryItemEl = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItemEl);

let instance = null;

function createGalleryItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    )
    .join('');
}

const onImageClick = event => {
  event.preventDefault();
  const { target } = event;

  if (!target.dataset.source) {
    return;
  }

  instance = basicLightbox.create(`<img src="${target.dataset.source}">`);
  instance.show();

  window.addEventListener('keydown', onEscKeyPress);
};

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    instance.close();
    window.removeEventListener('keydown', onEscKeyPress);
  }
}

galleryContainer.addEventListener('click', onImageClick);

console.log(galleryItems);

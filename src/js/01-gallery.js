import { galleryItems } from './gallery-items.js';
// Change code below this line
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const gallery = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const renderGallery = (items) => {
  const galleryMarkup = items.map((item) => createGalleryItem(item)).join('');
  gallery.innerHTML = galleryMarkup;
};

renderGallery(galleryItems);

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const imageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${imageUrl}" width="800" height="600">`);
    instance.show();
  }
});

console.log(galleryItems)
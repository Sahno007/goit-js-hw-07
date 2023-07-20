import { galleryItems } from './gallery-items.js';
// Change code below this line
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

const modal = document.getElementById('lightbox-modal');
const modalImage = modal.querySelector('.modal__image');

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const clickedElement = event.target;

  if (clickedElement.classList.contains('gallery__image')) {
    const imageUrl = clickedElement.dataset.source;

    // Show modal with the large image using basicLightbox
    const instance = basicLightbox.create(`<img src="${imageUrl}" alt="" />`);
    instance.show();
  }
});

modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal') || event.target.classList.contains('modal__close')) {
    // Close the modal if clicked on the overlay or close button
    modal.classList.remove('open');
  }
});

console.log(galleryItems);
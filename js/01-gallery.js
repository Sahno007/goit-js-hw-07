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

let instance = null;

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const clickedElement = event.target;

  if (clickedElement.classList.contains('gallery__image')) {
    const imageUrl = clickedElement.dataset.source;

    instance = basicLightbox.create(`<img src="${imageUrl}" alt="" />`);
    instance.show();

    // Enable keyboard event listening
    window.addEventListener('keydown', onKeyPress);
  }
});

modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal') || event.target.classList.contains('modal__close')) {
    modal.classList.remove('open');

    // Disable keyboard event listening
    window.removeEventListener('keydown', onKeyPress);
  }
});

// Keyboard event handler function
function onKeyPress(event) {
  // The keycode for the "Escape" key is 27
  if (event.code === 'Escape') {
    instance.close();
  }
}

console.log(galleryItems);

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

  if (clickedElement.tagName === 'IMG') {
    const imageUrl = clickedElement.dataset.source;

    instance = basicLightbox.create(`<img src="${imageUrl}" alt="" />`, {
      onShow: () => {
        window.addEventListener('keydown', onKeyPress);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeyPress);
      }
    });

    instance.show();
  }
});

modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal__close')) {
    instance.close();
  }
});

function onKeyPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

console.log(galleryItems);

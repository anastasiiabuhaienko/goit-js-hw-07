import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);




const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryCard(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    src="${preview}"
                    alt="${description}"
                    data-source="${original}"
                    class="gallery__image"
                >
            </a>
        </div>
        `;
    })
        .join('');

}



galleryContainer.addEventListener('click', openLargImageOnClick);


function openLargImageOnClick(event) {
    event.preventDefault();
    const isGalleryEl = event.target.classList.contains('gallery__image');

    if (!isGalleryEl) {
        return;
    };

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
    `);
    
    instance.show();

    if (basicLightbox.visible()) {
        window.addEventListener('keydown', onPressEsc);
    };
    
    function onPressEsc(event) {
        if (event.key === 'Escape') {
            return instance.close();
        }

    }
}

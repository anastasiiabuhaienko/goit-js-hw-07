import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryCard(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link">
                <img
                    src="${preview}"
                    alt="${description}"
                    class="gallery__image"
                >
            </a>
        </div>
        `;
    })
        .join('');

}






// 2.Реализация делегирования на div.gallery и получение url большого изображения.
// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox.Используй CDN сервис jsdelivr 
// и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// 4.Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// 5.Замена значения атрибута src элемента < img > в модальном окне перед открытием.Используй готовую разметку 
// модального окна с изображением из примеров библиотеки basicLightbox.
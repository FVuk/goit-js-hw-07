import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// adding markup

const markup = galleryItems
  .map(
    (galleryItem) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-original="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
  )
  .join("");

console.log(markup);

gallery.insertAdjacentHTML("afterbegin", markup);

// preventing default settings

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  selectImage(e);
});

// adding modals

function selectImage(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  } else {
    const instance = basicLightbox.create(
      `<img src="${e.target.dataset.original}">`,
      { onClose: () => document.removeEventListener("keydown", closeImage) }
    );

    instance.show();

    // bonus - closing modal via keyboard

    const closeImage = (e) => {
      if (e.code === "Escape") {
        instance.close();
      }
    };
    document.addEventListener("keydown", closeImage);
  }
}

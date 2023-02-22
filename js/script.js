// Ainda não sei trabalhar com JS, por isso apenas pedi ajuda do chatGPT, talvez eu altere isso tudo depois de aprender

const galleryItems = document.querySelector(".galeria-itens");
const galleryContainer = document.querySelector(".premium-anuncios");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
let itemIndex = 0;
const itemCount = galleryItems.children.length;

function slideItem() {
  const itemWidth = galleryItems.children[0].offsetWidth; // largura do primeiro item
  galleryItems.style.transform = `translateX(-${itemIndex * itemWidth}px)`;

  // Esconde a seta esquerda se o primeiro item estiver sendo exibido
  if (itemIndex === 0) {
    leftArrow.style.display = "none";
  } else {
    leftArrow.style.display = "flex";
  }

  // Esconde a seta direita se o último item estiver sendo exibido
  if (itemIndex === itemCount - 1) {
    rightArrow.style.display = "none";
  } else {
    rightArrow.style.display = "flex";
  }
}

leftArrow.addEventListener("click", () => {
  if (itemIndex === 0) {
    itemIndex = itemCount - 1;
  } else {
    itemIndex--;
  }
  slideItem();
});

rightArrow.addEventListener("click", () => {
  if (itemIndex === itemCount - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  slideItem();
});

// Esconde a seta esquerda no início, já que o primeiro item é exibido por padrão
leftArrow.style.display = "none";

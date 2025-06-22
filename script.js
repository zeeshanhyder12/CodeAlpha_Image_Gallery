const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const filterButtons = document.querySelectorAll('.filter-buttons button');

let currentIndex = 0;
let filteredItems = [...galleryItems];

// Open lightbox
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'flex';
  });
});

function showImage() {
  const img = filteredItems[currentIndex].querySelector('img');
  lightboxImg.src = img.src;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % filteredItems.length;
  showImage();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
  showImage();
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Filter functionality
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-filter');
    filteredItems = [];
    galleryItems.forEach((item, index) => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
        filteredItems.push(item);
      } else {
        item.style.display = 'none';
      }
    });
  });
});

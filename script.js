// ===== FAQ раскрытие =====
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });
    item.classList.toggle('active');
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== SCROLL FADE-IN =====
const fadeBlocks = document.querySelectorAll('section, .faq-item');

// исключаем автора и его фото
const blocksToAnimate = Array.from(fadeBlocks).filter(
  block => !block.closest('.author-mobile-bg')
);

// изначально скрываем все
blocksToAnimate.forEach(block => {
  block.style.opacity = 0;
  block.style.transform = 'translateY(20px)';
  block.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
});

function handleScrollFade() {
  const triggerBottom = window.innerHeight * 0.9;

  blocksToAnimate.forEach(block => {
    const top = block.getBoundingClientRect().top;
    if (top < triggerBottom) {
      block.style.opacity = 1;
      block.style.transform = 'translateY(0)';
    }
  });
}

// запускаем на скролле и сразу при загрузке
window.addEventListener('scroll', handleScrollFade);
window.addEventListener('load', handleScrollFade);

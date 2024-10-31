// تفعيل الوضع الليلي
const toggleButton = document.querySelector('.night-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
    document.querySelectorAll('header, section, footer').forEach(element => {
        element.classList.toggle('night-mode');
    });
    toggleButton.textContent = document.body.classList.contains('night-mode') ? '🌞' : '🌙';
});

// نافذة عرض الصور المنبثقة
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-content');
const caption = document.querySelector('.caption');

document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = image.src;
        caption.textContent = image.getAttribute('data-title');
    });
});

document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});
const image = document.querySelector('.zoom-image');
const container = document.querySelector('.zoom-container');

container.addEventListener('mousemove', (e) => {
    const containerRect = container.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const offsetY = e.clientY - containerRect.top;

    const xPercent = (offsetX / containerRect.width) * 100;
    const yPercent = (offsetY / containerRect.height) * 100;

    image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    image.style.transform = 'scale(2)';
});

container.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
});

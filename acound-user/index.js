





let currentImageIndex = 0;
const images = [
    '/acound-user/usuario-cuenta.jpeg',
    '/acound-user/no idea.png',
    '/acound-user/usuario-cuenta.jpeg',
    '/acound-user/no idea.png',
    '/acound-user/usuario-cuenta.jpeg',
    '/acound-user/no idea.png',
    '/acound-user/usuario-cuenta.jpeg',
    '/acound-user/no idea.png',
    '/acound-user/no idea.png',
    '/acound-user/usuario-cuenta.jpeg',
    '/acound-user/no idea.png',
    '/acound-user/usuario-cuenta.jpeg',
    '/acound-user/no idea.png',
    '/acound-user/usuario-cuenta.jpeg',
    '/acound-user/usuario-cuenta.jpeg',
    '/acound-user/usuario-cuenta.jpeg',
    '/acound-user/usuario-cuenta.jpeg',
];

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImage.src = images[currentImageIndex];
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;

    // Si llegamos al final o al principio del array, volvemos a empezar
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
}

// Añadir event listeners a los botones de cambio de imagen
document.querySelector('.prev').addEventListener('click', function(event) {
    event.stopPropagation();
    changeImage(-1);
});

document.querySelector('.next').addEventListener('click', function(event) {
    event.stopPropagation();
    changeImage(1);
});

// Asegúrate de que el modal no se cierre cuando se hace clic en los botones de cambio de imagen
document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target.id === 'modal') {
        closeModal();
    }
});




const likes = document.querySelector('.likes');

let likeCount = 0;

likes.addEventListener('click', () => {
    likeCount++;
    likes.textContent = likeCount;
});
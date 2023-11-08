const videoContainers = document.querySelectorAll('.video-container');

videoContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        videoContainers.forEach((c) => c.classList.remove('active'));
        container.classList.add('active');
    });
});

videoContainers[0].classList.add('active');


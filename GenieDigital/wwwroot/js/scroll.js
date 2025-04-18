window.initScrollToTop = () => {
    const btn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });
};

window.scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

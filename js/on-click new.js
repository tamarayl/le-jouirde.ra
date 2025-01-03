const navLinkEls = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEL => {
    const navLinkPathname = new URL(navLinkEL.href).pathname;

    if (navLinkEL.href.includes(windowPathname) || (windowPathname === 'index.html' && navLinkPathname === '/')) {
        navLinkEL.classList.add('active');
    }
});
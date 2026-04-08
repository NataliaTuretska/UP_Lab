export function updateHeaderOnScroll(header, scrollTop, lastScrollTop) {
  if (!header) return lastScrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = '-100px';
  } else {
    header.style.top = '0';
  }

  return scrollTop;
}

// для реального сайту
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  lastScroll = updateHeaderOnScroll(header, currentScroll, lastScroll);
});
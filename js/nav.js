const header = document.querySelector('.header');
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop) {
      header.style.top = '-100px';
   } else {
      header.style.top = '0';
   }
   lastScrollTop = scrollTop;
});

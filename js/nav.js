import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: "https://6ee07bd11296bec96a58ced857be6168@o4511186367873024.ingest.de.sentry.io/4511186389958736",
  tracesSampleRate: 1.0,
  environment: 'development',
});
export function updateHeaderOnScroll(header, scrollTop, lastScrollTop) {
  if (!header) return lastScrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = '-100px';
  } else {
    header.style.top = '0';
  }

  return scrollTop;
}

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  lastScroll = updateHeaderOnScroll(header, currentScroll, lastScroll);
});

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.capture('nav_click', {
        menu_item: link.textContent.trim(),
        target_page: link.getAttribute('href')
      });
    }
  });
});
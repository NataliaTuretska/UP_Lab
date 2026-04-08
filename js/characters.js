export function toggleDetailsById(id) {
  const element = document.getElementById(id);

  if (!element) {
    return false;
  }

  element.classList.toggle('hidden');
  return true;
}

// для кнопок на сайті
window.toggleDetails1 = function () {
  toggleDetailsById('ned');
};

window.toggleDetails2 = function () {
  toggleDetailsById('serse');
};

window.toggleDetails3 = function () {
  toggleDetailsById('djon');
};
// 🔥 Feature Flag (керування UI)
posthog.onFeatureFlags(function () {
  if (posthog.isFeatureEnabled('new_feature')) {
    document.body.style.backgroundColor = '#e6f7ff';
  }
});


// 🔥 Основна функція (відкриття деталей)
export function toggleDetailsById(id) {
  const element = document.getElementById(id);

  if (!element) {
    return false;
  }

  // перевіряємо, чи було приховано
  const wasHidden = element.classList.contains('hidden');

  // перемикаємо
  element.classList.toggle('hidden');

  // 🔥 PostHog подія (тільки коли відкривається)
  if (wasHidden) {
    posthog.capture('character_opened', {
      character_id: id,
      page: window.location.pathname,
      timestamp: new Date().toISOString()
    });
  }

  return true;
}


// 🔥 Кнопки
window.toggleDetails1 = function () {
  toggleDetailsById('ned');
};

window.toggleDetails2 = function () {
  toggleDetailsById('serse');
};

window.toggleDetails3 = function () {
  toggleDetailsById('djon');
};
export function toggleDetailsById(id) {
  const element = document.getElementById(id);

  if (!element) {
    return false;
  }

  const wasHidden = element.classList.contains('hidden');
  element.classList.toggle('hidden');

  if (wasHidden && typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture('character_opened', {
      character_id: id,
      page: window.location.pathname,
      timestamp: new Date().toISOString()
    });
  }

  return true;
}

if (typeof window !== 'undefined' && window.posthog) {
  window.posthog.onFeatureFlags(function () {
    if (window.posthog.isFeatureEnabled('new_feature')) {
      document.body.style.backgroundColor = '#e6f7ff';
    }
  });
}

window.toggleDetails1 = function () {
  toggleDetailsById('ned');
};

window.toggleDetails2 = function () {
  toggleDetailsById('serse');
};

window.toggleDetails3 = function () {
  toggleDetailsById('djon');
};
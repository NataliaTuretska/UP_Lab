const status = import.meta.env.VITE_APP_STATUS;

const badge = document.createElement('div');
badge.textContent = `Mode: ${status}`;
badge.style.position = 'fixed';
badge.style.right = '10px';
badge.style.bottom = '10px';
badge.style.padding = '8px 12px';
badge.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
badge.style.color = '#fff';
badge.style.borderRadius = '8px';
badge.style.fontSize = '14px';
badge.style.zIndex = '2000';

document.body.appendChild(badge);
import { describe, it, expect, beforeEach } from 'vitest';
import '../js/characters.js';
import { toggleDetailsById } from '../js/characters.js';

describe('toggleDetailsById', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <p id="ned" class="hidden">Нед</p>
      <p id="serse" class="hidden">Серсея</p>
      <p id="djon" class="hidden">Джон</p>
    `;
  });

  it('показує блок ned', () => {
    toggleDetailsById('ned');
    expect(document.getElementById('ned').classList.contains('hidden')).toBe(false);
  });

  it('ховає блок ned при повторному натисканні', () => {
    toggleDetailsById('ned');
    toggleDetailsById('ned');
    expect(document.getElementById('ned').classList.contains('hidden')).toBe(true);
  });

  it('показує блок serse', () => {
    toggleDetailsById('serse');
    expect(document.getElementById('serse').classList.contains('hidden')).toBe(false);
  });

  it('показує блок djon', () => {
    toggleDetailsById('djon');
    expect(document.getElementById('djon').classList.contains('hidden')).toBe(false);
  });

  it('повертає true якщо елемент знайдено', () => {
    expect(toggleDetailsById('ned')).toBe(true);
  });

  it('повертає false якщо елемент не знайдено', () => {
    expect(toggleDetailsById('unknown')).toBe(false);
  });

  it('window.toggleDetails1 працює', () => {
    window.toggleDetails1();
    expect(document.getElementById('ned').classList.contains('hidden')).toBe(false);
  });

  it('window.toggleDetails2 працює', () => {
    window.toggleDetails2();
    expect(document.getElementById('serse').classList.contains('hidden')).toBe(false);
  });

  it('window.toggleDetails3 працює', () => {
    window.toggleDetails3();
    expect(document.getElementById('djon').classList.contains('hidden')).toBe(false);
  });
});
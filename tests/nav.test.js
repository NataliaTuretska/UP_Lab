import { describe, it, expect } from 'vitest';
import { updateHeaderOnScroll } from '../js/nav.js';

describe('updateHeaderOnScroll', () => {
  it('ховає header при скролі вниз', () => {
    const header = { style: { top: '0' } };

    const result = updateHeaderOnScroll(header, 200, 100);

    expect(header.style.top).toBe('-100px');
    expect(result).toBe(200);
  });

  it('показує header при скролі вгору', () => {
    const header = { style: { top: '-100px' } };

    const result = updateHeaderOnScroll(header, 50, 100);

    expect(header.style.top).toBe('0');
    expect(result).toBe(50);
  });

  it('повертає lastScrollTop якщо header відсутній', () => {
    const result = updateHeaderOnScroll(null, 50, 100);

    expect(result).toBe(100);
  });
});
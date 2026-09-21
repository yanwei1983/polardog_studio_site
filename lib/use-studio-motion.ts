'use client';

import { useEffect, type RefObject } from 'react';

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/** Imperative transforms keep pointer/scroll updates outside React rendering. */
export function useStudioMotion(rootRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    const hero = root?.querySelector<HTMLElement>('.hero');
    const product = root?.querySelector<HTMLElement>('.product-art');
    if (!root || !hero || !product) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let lastTime = 0;
    let pointerX = 0;
    let pointerY = 0;
    let x = 0;
    let y = 0;
    let scroll = 0;
    let scrollTarget = 0;
    let productY = 0;
    let productTarget = 0;
    let drag: {
      id: number;
      x: number;
      y: number;
      startX: number;
      startY: number;
    } | null = null;
    let geometryDirty = true;

    function animate(time: number) {
      frame = 0;
      if (reducedMotion.matches) return;
      if (geometryDirty) {
        const heroBounds = hero!.getBoundingClientRect();
        scrollTarget = clamp(-heroBounds.top / heroBounds.height, 0, 1);
        const productBounds = product!.getBoundingClientRect();
        productTarget =
          clamp(
            (window.innerHeight / 2 -
              productBounds.top -
              productBounds.height / 2) /
              window.innerHeight,
            -1,
            1,
          ) * 50;
        geometryDirty = false;
      }
      const delta = lastTime ? Math.min(time - lastTime, 64) : 16;
      const damping = 1 - Math.exp(-delta / 115);
      lastTime = time;
      x += (pointerX - x) * damping;
      y += (pointerY - y) * damping;
      scroll += (scrollTarget - scroll) * damping;
      productY += (productTarget - productY) * damping;
      hero!.style.setProperty('--scene-x', `${(x * 38).toFixed(2)}px`);
      hero!.style.setProperty(
        '--scene-y',
        `${(y * 24 + scroll * 120).toFixed(2)}px`,
      );
      hero!.style.setProperty('--type-x', `${(-x * 11).toFixed(2)}px`);
      hero!.style.setProperty(
        '--type-y',
        `${(-y * 8 - scroll * 42).toFixed(2)}px`,
      );
      hero!.style.setProperty('--detail-x', `${(-x * 24).toFixed(2)}px`);
      hero!.style.setProperty(
        '--detail-y',
        `${(-y * 18 - scroll * 64).toFixed(2)}px`,
      );
      product!.style.setProperty('--product-y', `${productY.toFixed(2)}px`);
      if (
        Math.abs(pointerX - x) +
          Math.abs(pointerY - y) +
          Math.abs(scrollTarget - scroll) +
          Math.abs(productTarget - productY) >
        0.004
      )
        frame = requestAnimationFrame(animate);
      else lastTime = 0;
    }

    function schedule() {
      if (!frame && !reducedMotion.matches)
        frame = requestAnimationFrame(animate);
    }
    function onScroll() {
      root!.dataset.scrolled = String(window.scrollY > 30);
      geometryDirty = true;
      schedule();
    }
    function onMove(event: PointerEvent) {
      if (reducedMotion.matches || !event.isPrimary) return;
      if (drag) {
        pointerX = clamp(
          drag.startX + (event.clientX - drag.x) / 170,
          -1.3,
          1.3,
        );
        pointerY = clamp(
          drag.startY + (event.clientY - drag.y) / 170,
          -1.3,
          1.3,
        );
      } else if (event.pointerType === 'mouse') {
        const bounds = hero!.getBoundingClientRect();
        pointerX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        pointerY = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
      } else return;
      schedule();
    }
    function onDown(event: PointerEvent) {
      if (
        reducedMotion.matches ||
        !event.isPrimary ||
        event.button !== 0 ||
        (event.target as Element).closest('a, button')
      )
        return;
      drag = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        startX: pointerX,
        startY: pointerY,
      };
      hero!.setPointerCapture(event.pointerId);
      hero!.dataset.dragging = 'true';
    }
    function onRelease(event: PointerEvent) {
      if (drag?.id !== event.pointerId) return;
      drag = null;
      delete hero!.dataset.dragging;
      if (hero!.hasPointerCapture(event.pointerId))
        hero!.releasePointerCapture(event.pointerId);
      pointerX = pointerY = 0;
      schedule();
    }
    function onLeave() {
      if (!drag) {
        pointerX = pointerY = 0;
        schedule();
      }
    }
    function onPreferenceChange() {
      if (reducedMotion.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        pointerX = pointerY = x = y = scroll = productY = 0;
        for (const property of [
          '--scene-x',
          '--scene-y',
          '--type-x',
          '--type-y',
          '--detail-x',
          '--detail-y',
        ])
          hero!.style.removeProperty(property);
        product!.style.removeProperty('--product-y');
      } else onScroll();
    }

    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerdown', onDown);
    hero.addEventListener('pointerup', onRelease);
    hero.addEventListener('pointercancel', onRelease);
    hero.addEventListener('lostpointercapture', onRelease);
    hero.addEventListener('pointerleave', onLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    reducedMotion.addEventListener('change', onPreferenceChange);
    onScroll();

    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerdown', onDown);
      hero.removeEventListener('pointerup', onRelease);
      hero.removeEventListener('pointercancel', onRelease);
      hero.removeEventListener('lostpointercapture', onRelease);
      hero.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      reducedMotion.removeEventListener('change', onPreferenceChange);
    };
  }, [rootRef]);
}

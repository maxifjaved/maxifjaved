import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

// Register Intersect plugin with Alpine
Alpine.plugin(intersect);

// Register Alpine components BEFORE start (fixes race condition)
Alpine.data('counter', (endValue, duration = 2) => ({
  current: 0,
  counting: false,
  end: parseInt(String(endValue).replace(/,/g, ''), 10),
  formatNumber(num) {
    return num.toLocaleString('en-US');
  },
  startCounting() {
    if (this.counting || this.current >= this.end) return;

    // Skip animation if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.current = this.end;
      return;
    }

    this.counting = true;
    const start = this.current;
    const range = this.end - start;
    const startTime = performance.now();
    const update = (now) => {
      const elapsedTime = now - startTime;
      if (elapsedTime < duration * 1000) {
        const progress = elapsedTime / (duration * 1000);
        this.current = Math.round(start + progress * range);
        requestAnimationFrame(update);
      } else {
        this.current = this.end;
        this.counting = false;
      }
    };
    requestAnimationFrame(update);
  },
}));

// Attach Alpine to window and start
window.Alpine = Alpine;
Alpine.start();
import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

// Register Intersect plugin with Alpine
Alpine.plugin(intersect);

// Attach Alpine to window and start
window.Alpine = Alpine;
Alpine.start();
import { readable } from 'svelte/store';
function getRoute() {
  if (!window.location.hash || !/^\#\//.test(window.location.hash)) {
    window.location.hash = '#/';
  }

  return window.location.hash.substr(2);
}

export const locationStore = readable(getRoute(), (set) => {
  window.addEventListener('hashchange', () => set(getRoute()));
});
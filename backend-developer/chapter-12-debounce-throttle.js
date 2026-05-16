/**
 * chapter 12 - debounce and throttle
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * useful for search input and scroll events
 */

const utils = {
  
  debounce(func, delay = 300) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  },

  throttle(func, limit = 300) {
    let lastcall = 0;
    return function(...args) {
      const now = date.now();
      if (now - lastcall >= limit) {
        func.apply(this, args);
        lastcall = now;
      }
    };
  }
};

console.log("=== chapter 12: debounce & throttle loaded ===");

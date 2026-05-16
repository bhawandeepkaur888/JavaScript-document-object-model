/**
 * chapter 8 - important dom events
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * mouse, keyboard, form and window events
 */

console.log("=== chapter 8: dom events ===");

// mouse events
document.addeventlistener("click", (e) => {
    console.log("clicked at x:", e.clientx, "y:", e.clienty);
});

// keyboard
document.addeventlistener("keydown", (e) => {
    console.log("key pressed:", e.key);
});

// form events
const input = document.queryselector("input");
input.addeventlistener("focus", () => console.log("input focused"));
input.addeventlistener("blur", () => console.log("input lost focus"));

// window events
window.addeventlistener("load", () => {
    console.log("page fully loaded");
});

/**
 * chapter 10 - form handling and validation
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * working with user input
 */

console.log("=== chapter 10: form handling ===");

form.addeventlistener("submit", (e) => {
  e.preventdefault();
  console.log("form submitted");
});

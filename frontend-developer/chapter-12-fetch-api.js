/**
 * chapter 12 - fetch api
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * working with backend data
 */

console.log("=== chapter 12: fetch api ===");

async function getdata() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}

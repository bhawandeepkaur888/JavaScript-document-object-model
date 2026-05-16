/**
 * chapter 8 - dom manipulation
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * interacting with html elements
 */

console.log("=== chapter 8: dom manipulation ===");

const element = document.createelement("div");
element.textcontent = "hello from javascript";
document.body.append(element);

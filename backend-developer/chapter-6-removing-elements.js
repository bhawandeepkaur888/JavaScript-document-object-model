/**
 * chapter 6 - removing and replacing elements
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * delete or replace html elements
 */

console.log("=== chapter 6: removing elements ===");

// remove element
const oldbox = document.queryselector(".old-box");
if (oldbox) oldbox.remove();

// remove child
const parent = document.queryselector("#parent");
const child = document.queryselector("#child");
parent.removechild(child);

// replace element
const oldpara = document.queryselector("#old");
const newpara = document.createelement("p");
newpara.textcontent = "this is replacement";
oldpara.parentnode.replacechild(newpara, oldpara);

/**
 * chapter 3 - traversing the dom
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * moving between elements (parent, children, siblings)
 */

console.log("=== chapter 3: traversing dom ===");

const list = document.queryselector("ul");

// children
console.log("children:", list.children);
console.log("first child:", list.firstelementchild);
console.log("last child:", list.lastelementchild);

// parent
const item = document.queryselector("li");
console.log("parent of li:", item.parentelement);

// siblings
console.log("next sibling:", item.nextelementsibling);
console.log("previous sibling:", item.previouselementsibling);

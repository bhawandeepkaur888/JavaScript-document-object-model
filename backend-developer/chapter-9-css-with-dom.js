/**
 * chapter 9 - manipulating css with dom
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * change styles and classes dynamically
 */

console.log("=== chapter 9: css with dom ===");

const box = document.queryselector(".box");

// inline style
box.style.backgroundcolor = "lightblue";
box.style.padding = "20px";
box.style.border = "2px solid black";

// using classlist (recommended)
box.classlist.add("active", "shadow");
box.classlist.toggle("darkmode");

// get computed style
const styles = getcomputedstyle(box);
console.log("current background:", styles.backgroundcolor);

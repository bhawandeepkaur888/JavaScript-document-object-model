/**
 * chapter 10 - advanced dom topics
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * documentfragment, mutationobserver, best practices
 */

console.log("=== chapter 10: advanced dom ===");

// documentfragment (better performance)
const fragment = document.createdocumentfragment();

for (let i = 1; i <= 5; i++) {
    const p = document.createelement("p");
    p.textcontent = `item ${i}`;
    fragment.appendchild(p);
}

document.body.appendchild(fragment);   // only 1 reflow

console.log("advanced dom concepts loaded");

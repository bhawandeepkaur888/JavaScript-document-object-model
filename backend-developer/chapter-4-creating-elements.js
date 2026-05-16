/**
 * chapter 4 - creating and adding elements
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * dynamically create new html elements
 */

console.log("=== chapter 4: creating elements ===");

// create new element
const newdiv = document.createelement("div");
newdiv.textcontent = "this is a new div";
newdiv.classlist.add("highlight");

// add to body
document.body.appendchild(newdiv);

// modern way
const newpara = document.createelement("p");
newpara.innerhtml = "hello from <strong>javascript</strong>";
document.body.append(newpara);

console.log("new elements created and added");

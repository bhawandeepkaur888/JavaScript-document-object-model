/**
 * chapter 5 - modifying elements
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * changing content and attributes
 */

console.log("=== chapter 5: modifying elements ===");

const title = document.queryselector("h1");

// change text
title.textcontent = "new title changed by js";

// change html
title.innerhtml = "title with <span style='color:red'>color</span>";

// change attributes
title.setattribute("id", "main-title");

// change classes
title.classlist.add("active");
title.classlist.remove("oldclass");
title.classlist.toggle("dark");

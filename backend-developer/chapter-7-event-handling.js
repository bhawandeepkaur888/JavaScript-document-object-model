/**
 * chapter 7 - event handling
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * adding click, hover and other events
 */

console.log("=== chapter 7: event handling ===");

const btn = document.queryselector("#mybutton");

btn.addeventlistener("click", function() {
    console.log("button clicked!");
    alert("hello from event handler");
});

// event with arrow function
btn.addeventlistener("mouseover", () => {
    btn.style.backgroundcolor = "yellow";
});

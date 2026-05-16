/**
 * chapter 2 - selecting elements
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * different ways to select html elements
 */

console.log("=== chapter 2: selecting elements ===");

// 1. getelementbyid
const heading = document.getelementbyid("main-heading");

// 2. queryselector (most used)
const box = document.queryselector(".box");
const firstpara = document.queryselector("p");

// 3. queryselectorall
const allparas = document.queryselectorall("p");
const allboxes = document.queryselectorall(".box");

// 4. getelementsbyclassname / tagname
const buttons = document.getelementsbytagname("button");

// example usage
console.log("all paragraphs:", allparas.length);

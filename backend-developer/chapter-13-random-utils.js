/**
 * chapter 13 - random utilities
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * generate random ids, colors, numbers
 */

const random = {
  
  id(length = 8) {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charat(math.floor(math.random() * chars.length));
    }
    return result;
  },

  color() {
    return "#" + math.floor(math.random() * 16777215).tostring(16).padstart(6, "0");
  },

  number(min, max) {
    return math.floor(math.random() * (max - min + 1)) + min;
  }
};

console.log("=== chapter 13: random utilities loaded ===");

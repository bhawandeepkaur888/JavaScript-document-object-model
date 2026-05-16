/**
 * chapter 11 - localstorage helper
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * simple wrapper for localstorage with json support
 */

const storage = {
  
  set(key, value) {
    try {
      const data = json.stringify(value);
      localstorage.setitem(key, data);
    } catch (e) {
      console.error("storage set error:", e);
    }
  },

  get(key) {
    try {
      const data = localstorage.getitem(key);
      return data ? json.parse(data) : null;
    } catch (e) {
      console.error("storage get error:", e);
      return null;
    }
  },

  remove(key) {
    localstorage.removeitem(key);
  },

  clear() {
    localstorage.clear();
  }
};

console.log("=== chapter 11: localstorage helper loaded ===");
/* example
storage.set("username", "bhawandeep");
console.log(storage.get("username"));
*/

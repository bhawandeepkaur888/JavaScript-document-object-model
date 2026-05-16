/**
 * chapter 15 - fetch wrapper (api helper)
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * simple and clean api calling
 */

const api = {
  
  async get(url) {
    const res = await fetch(url);
    if (!res.ok) throw new error("request failed");
    return res.json();
  },

  async post(url, data) {
    const res = await fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: json.stringify(data)
    });
    return res.json();
  }
};

console.log("=== chapter 15: fetch wrapper loaded ===");

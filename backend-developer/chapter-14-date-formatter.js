/**
 * chapter 14 - date formatter
 *
 * license: mit
 * author: @bhawandeep kaur
 *
 * easy date formatting
 */

const datefmt = {
  
  format(date = new date(), pattern = "yyyy-mm-dd") {
    const year = date.getfullyear();
    const month = string((date.getmonth() + 1)).padstart(2, "0");
    const day = string(date.getdate()).padstart(2, "0");
    const hours = string(date.gethours()).padstart(2, "0");
    const minutes = string(date.getminutes()).padstart(2, "0");

    return pattern
      .replace("yyyy", year)
      .replace("mm", month)
      .replace("dd", day)
      .replace("hh", hours)
      .replace("mm", minutes);
  },

  relative(date) {
    const diff = date.now() - new date(date).gettime();
    const minutes = math.floor(diff / 60000);
    if (minutes < 1) return "just now";
    if (minutes < 60) return minutes + " minutes ago";
    return math.floor(minutes / 60) + " hours ago";
  }
};

console.log("=== chapter 14: date formatter loaded ===");

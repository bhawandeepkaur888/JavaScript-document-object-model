/**
 * fileloader - simple file reader utility
 * 
 * license: mit
 * author: @bhawandeep kaur
 * 
 * this utility helps open and read text/csv files from the browser.
 */

const fileloader = {
  
  /**
   * open file dialog and read the selected file
   */
  openfile(onload, options = {}) {
    const {
      accept = "*",
      multiple = false,
      readas = "text"
    } = options;

    const input = document.createelement("input");
    input.type = "file";
    input.accept = accept;
    input.multiple = multiple;

    input.onchange = (event) => {
      const files = array.from(event.target.files);
      if (!files.length) return;

      files.foreach(file => {
        const reader = new filereader();

        reader.onload = (e) => {
          onload(e.target.result, file);
        };

        reader.onerror = () => {
          console.error("error reading file: " + file.name);
        };

        switch (readas) {
          case "dataurl":
            reader.readasdataurl(file);
            break;
          case "arraybuffer":
            reader.readasarraybuffer(file);
            break;
          case "binarystring":
            reader.readasbinarystring(file);
            break;
          default:
            reader.readastext(file);
        }
      });
    };

    input.click();
  },

  /**
   * read file as plain text
   */
  text(callback, options = {}) {
    this.openfile((content, file) => callback(content, file), {
      accept: options.accept || ".txt,.md,.json,.js,.css,.html",
      ...options
    });
  },

  /**
   * read and parse csv file (basic version)
   */
  csv(callback, options = {}) {
    this.openfile((text, file) => {
      if (!text) {
        callback([], file);
        return;
      }

      const data = text
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(boolean)
        .map(line => line.split(",").map(v => v.trim()));

      callback(data, file);
    }, {
      accept: ".csv",
      ...options
    });
  },

  /**
   * read and parse csv with slightly better handling
   */
  csvadvanced(callback, options = {}) {
    this.openfile((text, file) => {
      const rows = text.split(/\r?\n/).filter(boolean);
      const data = rows.map(row => {
        return row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)
          ?.map(v => v.replace(/^"|"$/g, '').trim()) || [];
      });

      callback(data, file);
    }, { 
      accept: ".csv", 
      ...options 
    });
  }
};

/*
fileloader.text((content, file) => {
  console.log("loaded file:", file.name);
  console.log(content);
});

fileloader.csv((data, file) => {
  console.table(data);
});
*/

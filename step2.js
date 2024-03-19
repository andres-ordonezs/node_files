"use strict";

const fsP = require("fs/promises");
//TODO: same refactor as step1
/* Function takes one argument, path, and it should read the file with that
path, and print the contents of that file. */
async function cat(path) {
  try {
    const contents = await fsP.readFile(path, "utf8");
    console.log(contents);

  } catch (err) {
    console.log(`Error reading ${path}:`);
    console.log(`${err}`);
    process.exit(1);
  }
}

/** Function takes one argument, a web URL, and logs the contents */
async function webCat(path) {
  try {
    const contents = await fetch(path);
    const html = await contents.text();
    console.log(html);
  } catch (err) {
    console.log(`Error reading ${path}:`);
    console.log(`${err}`);
    process.exit(1);
  }
}

/** Grabs path from process.argv, determines if it is a file or web URL, and
 * calls the relevant function to print the contents.
 */
function main(){
  const path = process.argv[2];

  if (URL.canParse(path)) {
    webCat(path);
  }
  else {
    cat(path);
  }
}

main();
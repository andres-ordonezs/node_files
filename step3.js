"use strict";

const fsP = require("fs/promises");
//TODO: same refactor as step1
/* Function takes one argument, path, and it should read the file with that
path, and print the contents of that file. */
async function cat(path) {
  let contents;
  try {
    contents = await fsP.readFile(path, "utf8");
  } catch (err) {
    console.log(`Error reading ${path}:`);
    console.log(`${err}`);
    process.exit(1);
  }

  console.log(contents);
}

/** Function takes one argument, a web URL, and logs the contents */
async function webCat(path) {
  let html;
  try {
    let contents = await fetch(path);
    html = await contents.text();
  } catch (err) {
    console.log(`Error reading ${path}:`);
    console.log(`${err}`);
    process.exit(1);
  }
  console.log(html);
}

/* Writes result into file */
function writeFile(filePath, fileContent) {

}

/** Grabs path from process.argv, determines if it is a file or web URL, and
 * calls the relevant function to print the contents.
 */
function main() {
  // const path = process.argv[2];

  if (process.argv[2] === "--out") {

  }

  if (URL.canParse(path)) {
    webCat(path);
  }
  else {
    cat(path);
  }
}

main();
"use strict";

const fsP = require("fs/promises");

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

  return contents;
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
  return html;
}

/* Writes result into file */
async function writeFile(filePath, fileContent) {
  try {
    await fsP.writeFile(filePath, fileContent, "utf8");
  } catch (err) {
    console.log(`Couldn't write ${filePath}:`);
    console.error(`${err}`);
    process.exit(1);
  }
}

/** Grabs path from process.argv, determines if it is a file or web URL, and
 * calls the relevant function to print the contents.
 */
async function main() {
  const path = process.argv[process.argv.length - 1];
  let result;

  if (URL.canParse(path)) {
    result = await webCat(path);
  }
  else {
    result = await cat(path);
  }

  if (process.argv[2] === "--out") {
    const writeFilePath = process.argv[3];

    writeFile(writeFilePath, result);
  } else {
    console.log(result);
  }

}

main();
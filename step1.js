"use strict";

const fsP = require("fs/promises");

const path = process.argv[2];
cat(path);

/* Function takes one argument, path, and it should read the file with that
path, and print the contents of that file. */
async function cat(path) {
  let contents = null;

  try {
    contents = await fsP.readFile(path, "utf8");
  } catch (err) {
    console.log(`Error reading ${path}:`);
    console.log(`${err}`);
    process.exit(1);
  }

  console.log("File contents: ", contents);
}
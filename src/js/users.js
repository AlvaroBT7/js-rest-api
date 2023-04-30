import { readFile } from "fs";

// i could import this same block of code from fs/promises but i preferred to do it by hand because i want and i can.
const readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) return reject(err.message);
      resolve(data);
    });
  });
};

var users = JSON.parse(await readFilePromise("./src/data/users.json"));

export default users;

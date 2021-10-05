// Create Log files
//    - create a Logs directory, if it does not exist
//    - change the current process to the new Logs directory
//    - create 10 log files and write some text into the file
//    - output the files names to console

const fs = require("fs");
const path = "./logs";
if (!fs.existsSync(path)) {
  fs.mkdirSync(path);
}
process.chdir(path);
for (let i = 0; i < 10; i++) {
  fs.writeFile(`log${i}.txt`, `Text File Number ${i}`, (err) => {
    if (err) console.log(err);
    else console.log(`log${i}.txt`);
  });
}

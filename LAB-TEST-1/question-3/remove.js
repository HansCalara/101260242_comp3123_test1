// Remove Log files
//    - remove all the files from the Logs directory, if exists
//    - output the file names to delete
//    - remove the Logs directory

const fs = require("fs");
const path = "./logs";
if (fs.existsSync(path)) {
  process.chdir(path);
  fs.readdir(process.cwd(), (err, files) => {
    files.forEach((file) => {
      fs.unlink(file, (err) => {
        if (err) console.log(err);
        else console.log(`delete files...${file}`);
      });
    });
  });
}

const fs = require("fs");

const userName = "Ta-Seen";

fs.writeFile("user-data.txt", "Name: " + userName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File updated");
});

console.log(userName);

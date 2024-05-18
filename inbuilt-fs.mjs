import fs from "fs";

// Creating a new directory
/* fs.mkdir("tamil-combined/tamil-weekend", (err, path) => {
  if (err) {
    console.log("Error creating directory", err);
  } else {
    console.log("Created directory", path);
  }
}); */

// fs.mkdirSync("tamil-weekend");

if (!fs.existsSync("tamil-weekend")) {
  fs.mkdirSync("tamil-weekend");
}

// Creating a file
/* fs.writeFile("tamil-weekend/Day1.js", "console.log('Day 100 JS');", () => {
  console.log("File Created Successfully");
});
 */
// create a file with the filename as the current date-time format
// also the file should contain the current timestamp as its content
/* fs.writeFileSync(
  `tamil-weekend/${new Date().toISOString()}.txt`,
  Date.now().toString()
); */

// Read File with encosing
/* fs.readFile("Details.pdf", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}); */

/* try {
  const data = fs.readFileSync("Details.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.log(err);
} */

/* fs.appendFile("Details.t", "\nTask: \n  Download Post Man\n", () => {
  console.log("File Contents has been appended successfully");
});

fs.appendFileSync("Details.txt", "\nTask: \n  Download Post Man\n"); */

// Deleting a file:
fs.unlink("Details.t", () => {
  console.log("Deleted File Successfully");
});

try {
  fs.unlinkSync("Details.t");
} catch (e) {
  console.log(e);
}

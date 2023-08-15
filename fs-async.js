const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstText = result;
  readFile("./content/second.txt", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./content/result.txt",
      `here is the res ${firstText} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});

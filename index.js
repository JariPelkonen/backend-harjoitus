const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// serve the public directory as a static content here
app.use(express.static("public"));

app.get("/randomize", (req, res) => {
  let text = "";
  let numbers = [];
  let sameNumber = true;
  for (let i = 0; i < 3; i++) {
    let number = (Math.floor(Math.random() * 3) + 1).toString();
    numbers.push(number);
    for (let x in numbers) {
      if (number !== numbers[x]) {
        sameNumber = false;
      }
    }
    text += "number" + i.toString() + ":  " + number + "<br>";
  }
  if (sameNumber) {
    text += "<br>" + "Success!";
  }
  res.send(text);
});

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

app.get("/api/locations", (req, res) => {
  res.send(JSON.stringify(database, null, 2));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

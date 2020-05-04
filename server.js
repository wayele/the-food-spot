// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var tables = [];

const waitingList = [];

// Routes

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/add', function (req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get('/view', function (req, res) {
  res.sendFile(path.join(__dirname, "./view.html"));
  // res.json(tables);
  // res.json(waitingList);
})

app.get('/api/tables', function (req, res) {
  res.json(tables);
})

app.get('/api/waitlist', function (req, res) {
  res.json(waitingList);
})

app.post("/api/view", function (req, res) {
  const newTable = req.body;

  console.log(newTable)
  if (tables.length <= 4) {
    tables.push(newTable)
  } else {
    waitingList.push(newTable)
  }
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

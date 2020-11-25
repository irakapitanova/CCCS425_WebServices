// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

let morgan = require('morgan')
app.use(morgan('combined'))

let bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: "*/*"}))

// response body of the endpoint is always the same
app.get("/activity1", (req, res) => {
  res.send("Hello world")
})

// response body of the endpoint is always different
let count = 0
app.get("/activity2", (req, res) => {
  count++
  res.send("" + count)
})

// response body will contain a number one greater than the HTTP request body
app.post("/activity3", (req, res) => {
  console.log("Request to /activity3 received")
  console.log("This is in the body:" + req.body)
  
  let num = parseInt(req.body) + 1

  res.send("" + num)
})

// response body will contain the sum of the values of the properties {"foo": 5, "bar": 9}
app.put("/activity4", (req, res) => {
  console.log("Request to /activity4 received")
  console.log("This is in the body:" + req.body)
  
  let parsed = JSON.parse(req.body)
  let sum = parsed.foo + parsed.bar
  res.send("" + sum)
})

// response body will contain the sum of the elements of the array
app.put("/activity5", (req, res) => {
  console.log("Request to /activity5 received")
  let numbers = JSON.parse(req.body)
  console.log("This is in the body:" + numbers)
  let num = 0 
  for (var i in numbers) {
    console.log(num += numbers[i]);
  }
  res.send("" + num)

})

// rresponse body will contain the number of objects whose age property is greater than 35
app.put("/activity6", (req, res) => {
  console.log("Request to /activity6 received")
  let numbers = JSON.parse(req.body)
  let num = 0 
  for (var i in numbers) {
    let element = numbers[i]
    if (element.age > 35) {
      num ++
    }
  }
  res.send("" + num)

})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

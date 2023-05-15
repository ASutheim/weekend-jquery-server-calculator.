const express = require("express");
const app = express();
app.use(express.static("server/public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listening on port", port);
});

let allCalculations = [];
let newCalc;

app.post("/new", function (req, res) {
  console.log("Server received the new calculation");
  //saves parsed info to the object newCalc
  newCalc = req.body;
  console.log(newCalc);
  //pushes newCalc to the beginning of the array allCalculations
  allCalculations.unshift(newCalc);
  console.log(allCalculations);
  //sends happy face code back to client
  processCalculations(allCalculations);
  res.send(allCalculations);
});

function processCalculations() {
  for (each of allCalculations) {
    if (each.operator === `+`) {
      each.answer = parseInt(each.num1) + parseInt(each.num2);
      console.log(each);
    } else if (each.operator === `-`) {
      each.answer = parseInt(each.num1) - parseInt(each.num2);
      console.log(each);
    } else if (each.operator === `*`) {
      each.answer = parseInt(each.num1) * parseInt(each.num2);
      console.log(each);
    } else if (each.operator === `/`) {
      each.answer = parseInt(each.num1) / parseInt(each.num2);
      console.log(each);
    }
  }
  return allCalculations;
}

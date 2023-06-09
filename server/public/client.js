$(onReady);
function onReady() {
  console.log("JQ is loaded, bring it on");
  // event listeners
  $("#plus-btn").on("click", handleOperator);
  $("#minus-btn").on("click", handleOperator);
  $("#multiply-btn").on("click", handleOperator);
  $("#divide-btn").on("click", handleOperator);
  $("#equals-btn").on("click", handleSubmit);
  $("#clear-btn").on("click", handleClear);

  getCalculations();
}

let operator;

function handleOperator() {
  //captures the button click on the chosen operator and saves it to a variable
  operator = $(this).val();
  console.log(operator);
}

function getCalculations() {
  console.log("inside getfunction");
  //Sends a GET request to the server for all calculations
  $.ajax({
    type: "GET",
    url: "/tasks",
  })
    //Passes response to the render function
    .then(function (response) {
      console.log(response);
      renderCalculations(response);
    })
    .catch(function (error) {
      console.log("error in GET", error);
    });
}

function handleSubmit(event) {
  event.preventDefault();
  //sets variables to the actual values of the number input fields
  let num1 = $("#num1").val();
  let num2 = $("#num2").val();
  //saves calculation to a new object
  let newCalc = {
    num1: num1,
    operator: operator,
    num2: num2,
  };
  console.log("New calculation submitted:", newCalc);

  //Posts new calculation object to server
  $.ajax({
    method: "POST",
    url: "/new",
    data: newCalc,
  })

    //Receives back an array of completed calculations and sends them to a render function
    .then(function (response) {
      console.log(response);
      renderCalculations(response);
    })
    .catch(function (error) {
      alert("post failed:", error);
    });

  //Empties out input fields
  $("#num1").val("");
  $("#num2").val("");
}

function renderCalculations(array) {
  console.log("Inside render function!");

  //empty out old content
  $("#most-recent-calc").empty();
  $("#calc-history").empty();

  //append the most recent calculation to its field in the DOM
  $("#most-recent-calc").append(`<p>
  ${array[0].num1}
  ${array[0].operator}
  ${array[0].num2}
  =
  ${array[0].answer}
  </p>`);

  //loop through the remainder of the array and append each object to the DOM
  for (let i = 1; i < array.length; i++) {
    $(`#calc-history`).append(`<p>
    ${array[i].num1}
    ${array[i].operator}
    ${array[i].num2}
    =
    ${array[i].answer}
    </p>`);
  }
}

function handleClear() {
  $("#num1").val("");
  $("#num2").val("");
}

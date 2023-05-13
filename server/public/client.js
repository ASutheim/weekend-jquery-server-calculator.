$(onReady);
function onReady() {
  console.log("JQ is loaded, bring it on");
  // event listeners
  $("#plus-btn").on("click", handleOperator);
  $("#minus-btn").on("click", handleOperator);
  $("#equals-btn").on("click", handleSubmit);
}

let operator;

function handleOperator() {
  //   operator = $(this).data("operator");
  //   console.log(operator);
  //operator = button;

  operator = $(this).val();
  console.log(operator);
}

function handleSubmit() {
  //sets variables to the actual values of the number input fields
  let num1 = $("#num1").val();
  let num2 = $("#num2").val();
  //saves calculation to a new object
  let newCalc = {
    num1,
    operator,
    num2,
  };
  console.log("New calculation submitted:", newCalc);
  //Posts new calculation object to server
  $.ajax({
    method: "POST",
    url: "/new",
    data: newCalc,
  })
    .then(function (response) {
      console.log("New calc posted", response);
    })
    .catch(function (error) {
      alert("post failed:", error);
    });
  //Empties out input fields
  $("#num1").val("");
  $("#num2").val("");
}

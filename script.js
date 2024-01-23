let currentExpression = "";

function addNumber(number) {
  currentExpression += number;
  document.getElementById("result").value = currentExpression;
} 

function appendOperator(operator){
  currentExpression += operator;
  document.getElementById("result").value = currentExpression;
}

function clearfield(){
  currentExpression = "";
  document.getElementById("result").value = "";
}

function del() {
  currentExpression = currentExpression.slice(0, -1);
  document.getElementById("result").value = currentExpression;
}

function calculate() {
  try{
  const result =eval(currentExpression);
  document.getElementById("result").value = result;
  currntExpression = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
    currentExpression = "";
  }
}
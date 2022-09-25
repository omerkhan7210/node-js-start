const result = document.querySelector("#display");
const operators = Array.from(document.querySelectorAll(".oper"));
let operValue;
operators.forEach(function (oper) {
  oper.addEventListener("click", (e) => {
    operValue = e.target.innerHTML;
  });
});

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const output = e.target.innerText;
    if (output == "AC") {
      result.innerHTML = "0";
    } else if (output == "DEL") {
      result.innerHTML -= 1;
    } else if (output == "=") {
      if (result.innerHTML > 0) {
        result.innerHTML = output;
        console.log(result.innerHTML);
      } else {
        var operation = eval(result.innerHTML);
        result.innerHTML = operation;
      }
    } else {
      if (result.innerHTML >= 0) {
        if (output == operValue) {
          result.innerHTML += output;
        } else {
          result.innerHTML = output;
        }
      } else {
        result.innerHTML += output;
      }
    }
  });
});

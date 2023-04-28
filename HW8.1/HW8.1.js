const max_cost = document.getElementById("max-cost");
const type_of_cake = document.getElementById("type-of-cupcake");
const size = document.getElementById("size");

function calc() {
  const topping = document.querySelector('input[name="topping"]:checked');
  const dough = document.querySelector('input[name="dough"]:checked');
  const fresh = document.querySelector('input[name="fresh"]:checked');
  const payment = document.querySelector('input[name="payment"]:checked');

  let array = [];
  let type = type_of_cake.options[type_of_cake.selectedIndex].value;
  array.push(+type);
  array.push(+topping.value);
  array.push(+dough.value);

  if (size.value <= 5) {
    array.push(5);
  } else if (size.value > 5 && size.value <= 10) {
    array.push(10);
  } else {
    array.push(11);
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  switch (fresh.value) {
    case "0":
      break;
    case "15":
      sum = Math.round(sum * 0.85);
      break;
    case "30":
      sum = Math.round(sum * 0.7);
      break;
    default:
      console.log("Где-то косяк");
  }

  switch (payment.value) {
    case "5":
      sum = Math.round(sum * 0.95);
      break;
    case "0":
      break;
    default:
      console.log("Где-то косяк");
  }

  if (sum <= +max_cost.value) {
    document.getElementById(
      "result"
    ).innerHTML = `Сумма вашей покупки: ${sum} руб.`;
  } else {
    document.getElementById("result").innerHTML =
      "Выбранная вами максимальная цена ниже наших вычислений, очень жаль, что вы бедный :)";
  }
}

function checkErrors() {
  if (max_cost.value !== null && /^\d+$/.test(max_cost.value)) {
    if (size.value !== null && /^\d+$/.test(size.value)) {
      calc();
    } else {
      document.getElementById("size_errors").innerHTML =
        "Пожалуйста, введите числовое значение!";
    }
  } else {
    document.getElementById("cost_errors").innerHTML =
      "Пожалуйста, введите числовое значение!";
    document.getElementById("size_errors").innerHTML =
      "Пожалуйста, введите числовое значение!";
  }
}

document.getElementById("button").addEventListener("click", function (evt) {
  evt.preventDefault();
  checkErrors();
});

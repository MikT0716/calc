/*--------------- FEET TO METER------------------------------------------ */

meter1.addEventListener("input", function () {
  const meter1 = document.querySelector("#meter1");
  const feet1 = document.querySelector("#feet1");
  if (meter1.value < 1000000000) {
    feet1.innerHTML = (meter1.value * 3.28084)
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    feet1.innerHTML = (1000000000 * 3.28084)
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});

feet2.addEventListener("input", function () {
  const feet2 = document.querySelector("#feet2");
  const meter2 = document.querySelector("#meter2");
  if (feet2.value < 1000000000) {
    meter2.innerHTML = (feet2.value / 3.28084)
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    meter2.innerHTML = (1000000000 / 3.28084)
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});

/*--------------- TODO------------------------------------------ */

var addField = document.querySelector("#todo");
var addButton = document.querySelector("#addButton");
var ul = document.querySelector("#todolist");

//<li>asd<button type="button" class="delButton">X</button></li>

addButton.addEventListener("click", function () {
  var li = document.createElement("li");
  var button = document.createElement("button");
  if (addField.value != "") {
    li.innerText = addField.value;
    button.type = "button";
    button.className = "delButton";
    button.innerText = "X";
    button.addEventListener("click", function () {
      ul.removeChild(this.parentNode);
    });

    li.appendChild(button);
    ul.appendChild(li);
    addField.value = "";
  }
});

// var deleteBoxes = document.getElementsByClassName("deletebox");
// console.log(deleteBoxes[1].parentNode);
// for (var i = 0; i < deleteBoxes.length; i++) {
//   deleteBoxes[i].addEventListener("click", function (evt) {
//     ul.removeChild(this.parentNode);
//   });
// }

// function fvnev() {
//   return 1;
// }

// var valtozo = fvnev();
// console.log(valtozo);

// //----------------------------------------
// var input = document.querySelector("input[type=text]");
// console.log(input);

// var boxes = document.querySelectorAll(".deletebox");
// console.log(boxes);

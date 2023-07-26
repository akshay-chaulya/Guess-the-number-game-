// for genarating a random number with in 0 to 100
let rN = Math.floor(Math.random() * 100);

const input = document.getElementById("input");
const okBtn = document.getElementById("ok");
const cancleBtn = document.getElementById("cancle");
const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");

let chance = 0;
function forOkBtn() {
  if (0 > input.value >= 0) {
    var inputValue = input.value;
    
    message.innerHTML = ""

    ++chance
    if (inputValue < rN) {
      message.innerHTML = ("\n Computer number are big!\n");
      forSetTime()
    }
    else if (inputValue > rN) {
      message.innerHTML = ("\n Computer number are small!\n");
      forSetTime()
    }
    else {
      message.innerHTML = (`\nYou enter the right number: ${rN}`);
      setTimeout(() => {
        message.innerHTML = ""
        input.value = "";
      }, 2000)
      setTimeout(() => {
        gameArea.innerHTML = `Your Score is ${100 - chance}`
      }, 1000);
      console.log("The number is " + rN);
      setTimeout(() => {
        gameArea.innerHTML = `
        <input id="input" type="text">
        <button onclick="forOkBtn()" class="btn" id="ok">ok</button>
        <button onclick="forCancleBtn()" class="btn" id="cancle">Cancle</button>`
        location.reload(true);
      }, 3000)
    }
    // }
    // message.innerHTML = (`The number is ${rN} \n Your Score is ${(100 - chance)}`);

  }
  else {
    message.innerHTML = "Please enter a number"
  }
}

function forSetTime() {
  setTimeout(() => {
    message.innerHTML = ""
    input.value = "";
    input.focus()
  }, 1500)
}

function forCancleBtn() {
  inputValueArr = Array.from(input.value);
  inputValueArr.pop();
  input.value = inputValueArr.join("");
  input.focus()

}
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const notesToGive = document.querySelectorAll(".number-of-notes");
const cashInputDiv = document.querySelector(".cash-input");
const changeTableDiv = document.querySelector(".change-table");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

billAmount.addEventListener("input", () => {
  hideMessage();
  nextButton.style.display = "";
  cashInputDiv.style.display = "none";
  cashGiven.value = "";
  changeTableDiv.style.display = "none";
});

nextButton.addEventListener("click", () => {
  hideMessage();
  if (Number(billAmount.value) > 0) {
    nextButton.style.display = "none";
    cashInputDiv.style.display = "block";
  } else {
    showMessage("Enter valid bill amount");
  }
});

checkButton.addEventListener("click", function validateAmountAndCash() {
  hideMessage();
  var billAmt = Number(billAmount.value);
  var cashAmt = Number(cashGiven.value);

  if (billAmt > 0 && cashAmt > 0) {
    if (cashAmt >= billAmt) {
      const amountToBeReturn = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturn);
    } else {
      showMessage("Amount is not valid.");
    }
  } else {
    showMessage("Invalid bill anount");
  }
});

function calculateChange(amountToBeReturn) {
  changeTableDiv.style.display = "block";
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);
    amountToBeReturn %= availableNotes[i]; //remaining amount after previous note

    notesToGive[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(errorMessage) {
  message.style.display = "block";
  message.innerText = errorMessage;
}

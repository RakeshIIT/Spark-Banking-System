function sendMoney() {
  // console.log("hi");
  // 'use strict';
  var enterName = document.getElementById("enterName").value,
    enterAmount = parseInt(document.getElementById("enterAmount").value),
    enterSName = document.getElementById("enterSName").value,
    findSenderBankAccount = enterSName + "BankBalance";
    // console.log(findSenderBankAccount);
  var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
  if (enterAmount > enterSAmount) {
    alert("Insufficient Balance");
  } else {
    var findUserBankAccount = enterName + "BankBalance",
      finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount,
      myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
    document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
    document.getElementById(findUserBankAccount).innerHTML = finalAmount;
    alert('Transaction Successful!!!!!!!');
    alert(""+enterAmount +" Rupees is sent by " +enterName+ " to "+ enterSName);
    // transactions update
    var createPTag = document.createElement("li");
    var textNode = document.createTextNode(`Rs ${enterAmount} is sent from the sender with Email-id ${enterSName}@email.com to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
    createPTag.appendChild(textNode);
    var element = document.getElementById("transaction-history-body");
    element.insertBefore(createPTag, element.firstChild);
  }
}

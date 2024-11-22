// script.js

const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help/i;

// check more than one regex
const denyList = [helpRegex];

const isSpam = (msg) => helpRegex.test(msg);
// const isSpam = (msg) => msg.match(helpRegex); // Alternative solution except this will return an array of matches not a boolean like the above solution

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});

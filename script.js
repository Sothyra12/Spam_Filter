// script.js

const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// match the word "please help" or "assist me" in a case-insensitive way
const helpRegex = /please help|assist me/i;

// plus sign (+) matches the preceding element one or more times e.g. [0-9]+ matches one or more digits
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;

const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;

const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;

const dearRegex = /dear friend/i;

// check more than one regex
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex];

const isSpam = (msg) => denyList.some((regex) => regex.test(msg)); // This will return true if at least one of the regex in the denyList array is found in the message
// const isSpam = (msg) => helpRegex.test(msg);
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

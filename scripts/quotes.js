/**
 * quotes.js
 * joshua pawling
 */

const quotations =    [
  "hello!",
  "joshua#0911",
  "don't forget semicolons",
  "never gonna give you up",
  "i miss u nan",
  "view this website's source on my github",
  "hey ollie kiff",
  "currently learning mysql",
  "pyro best class on tf2",
  "from __future__ import timetravel",
  "considering learning rust",
  "have a good day!",
  "how's your day going?",
  "System.Console.WriteLine('i know C# if that helps')",
  "enjoy florida Anthony",
  "i see you cycling through these quotes",
  "what do you think about the really long quotes like this one?",
  "@joshuapawling1 on github",
  "get in contact: josh@joshuapawling.space",
  "thanks for checking my site out!",
  "press the plus button to see another quote",
  "not accepting work atm",
  "i really hate frontend. especially react",
  "proud nft non-enthusiast"
];

let quoteBlacklist = [];
const getRandomQuote        = () => {
  if (quoteBlacklist.length === 0) {
    quoteBlacklist = quotations.slice(0);
  }
  let index = Math.floor(Math.random() * quoteBlacklist.length);
  return quoteBlacklist.splice(index, 1);
}

const chooseRandomQuote     = () => {
  let tagline = document.getElementById("tagline");
  tagline.innerText = getRandomQuote();
}

window.onload = async function() {
  let randomizer = document.getElementById("randomizer");
  randomizer.addEventListener("click", chooseRandomQuote);
  randomizer.style = "display: inline";
  chooseRandomQuote();
}
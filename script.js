// --------Header Section------
var dynamicText = document.querySelector(".dynamic-text span");
const words = [
  "Software Developer",
  "Web Developer",
  "Frontend Developer",
  "Coder",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currWord = words[wordIndex];
  const currChar = currWord.substring(0, charIndex);
  dynamicText.textContent = currChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currWord.length) {
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};
typeEffect();

// ------About Section------

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("content");

function openTab(tabName, event) {
  for (const tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }
  for (const tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

var sideMenu = document.querySelector(".sidemenu");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-150px";
}

// ------------Contact Form------------------

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzv78-XwIl09UQp-9WTfHIU9F8NmECCfoBmYUect8FwnoYTyPciZILGpXnxcJ02Qsi9/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, {method: "POST", body: new FormData(form)})
    .then(() => {
      msg.innerHTML = "Message Sent Succesfully";
      setTimeout((response) => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// -------Services Section----------

// var serviceBox = document.querySelectorAll(".services-box");
// serviceBox.forEach((elem) => {
//   elem.addEventListener("mouseenter", () => {
//     elem.style.backgroundColor = "rgb(185, 18, 74)";
//   });
//   elem.addEventListener("mouseleave", () => {
//     elem.style.backgroundColor = "#262626";
//   });

// });

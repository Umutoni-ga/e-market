showAssistiveTechnologiesButton = document.querySelector(
  ".show-assistive-technologies-selection"
);
hideAssistiveTechnologiesButton = document.querySelector(
  ".hide-assistive-technologies-selection"
);

noAssistiveTechnologiesSelectedButton = document.querySelector(
  ".no-assistive-technologies-selected"
);

// select activateAssistiveTechnologiesButton
activateAssistiveTechnologiesButton = document.querySelector(
  ".activate-assistive-technologies-btn"
);

// if showAssistiveTechnologiesButton is clicked, show the assistive technologies selection
showAssistiveTechnologiesButton.addEventListener("click", () => {
  document.querySelector(".assistive-technologies-selection").style.display =
    "flex";
});

// if hideAssistiveTechnologiesButton is clicked, hide the assistive technologies selection

hideAssistiveTechnologiesButton.addEventListener("click", () => {
  document.querySelector(".assistive-technologies-selection").style.display =
    "none";
});

// if activateAssistiveTechnologiesButton is clicked,
// save the checkboxes status in the local storage
// check the login status in the local storage then go to the home page or the login page

activateAssistiveTechnologiesButton.addEventListener("click", () => {
  // save the checkboxes status in the local storage
  localStorage.setItem(
    "activatedAssistiveTechnologies",
    JSON.stringify({
      screenReader: document.querySelector("#screenReader").checked,
      magnifier: document.querySelector("#magnifier").checked,
      specialKeyboard: document.querySelector("#specialKeyboard").checked,
      voiceCommand: document.querySelector("#voiceCommand").checked,
    })
  );

  // check the login status in the local storage then go to the home page or the login page
  if (localStorage.getItem("loginStatus") === "loggedIn") {
    window.location.href = "public/home.html";
  } else {
    window.location.href = "public/login.html";
  }
});

// if noAssistiveTechnologiesSelectedButton is clicked, check the login status in the local storage then go to the home page or the login page
noAssistiveTechnologiesSelectedButton.addEventListener("click", () => {
  if (localStorage.getItem("loginStatus") === "loggedIn") {
    window.location.href = "public/home.html";
  } else {
    window.location.href = "public/login.html";
  }
});

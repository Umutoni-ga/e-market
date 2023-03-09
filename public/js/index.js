showAssistiveTechnologiesButton = document.querySelector(
  ".show-assistive-technologies-selection"
);
hideAssistiveTechnologiesButton = document.querySelector(
  ".hide-assistive-technologies-selection"
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

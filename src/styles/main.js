const checkbox = document.getElementById("toggle");

window.addEventListener("DOMContentLoaded", function () {
  // Uncheck the checkbox on page load
  checkbox.checked = false;
});

//puts on the main a dataset-scale using that to style it when the menu is opened
const handleCheckboxChange = () => {
  const main = document.querySelector("main"); // Select the main element

  main.dataset.scale = checkbox.checked; // Set data-scale attribute based on checkbox state
};

checkbox.addEventListener("change", handleCheckboxChange);

//for sticky menu
const primaryHeader = document.querySelector("header");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
  },
  { rootMargin: "70px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher);

const navBarItems = document.querySelector("#nav-bar--items");
const radioGrow = document.getElementById("grow");
const radioSlide = document.getElementById("slide");
const radioLeft = document.getElementById("left");
const radioRight = document.getElementById("right");
const radioTop = document.getElementById("top");

// Function to handle radio button change
function handleRadioChange() {
  if (radioSlide.checked) {
    navBarItems.setAttribute("data-animation-slide", "right");
    navBarItems.removeAttribute("data-animation-grow");
    if (radioLeft.checked) {
      navBarItems.setAttribute("data-animation-slide", "left");
    } else if (radioRight.checked) {
      navBarItems.setAttribute("data-animation-slide", "right");
    } else if (radioTop.checked) {
      navBarItems.setAttribute("data-animation-slide", "top");
    }
  } else if (radioGrow.checked) {
    navBarItems.setAttribute("data-animation-grow", "top");
    navBarItems.removeAttribute("data-animation-slide");
    if (radioLeft.checked) {
      navBarItems.setAttribute("data-animation-grow", "left");
    } else if (radioRight.checked) {
      navBarItems.setAttribute("data-animation-grow", "right");
    } else if (radioTop.checked) {
      navBarItems.setAttribute("data-animation-grow", "top");
    }
  }
}

// Check the initial state
handleRadioChange();

// Event listeners for radio button change
radioGrow.addEventListener("change", handleRadioChange);
radioSlide.addEventListener("change", handleRadioChange);
radioLeft.addEventListener("change", handleRadioChange);
radioRight.addEventListener("change", handleRadioChange);
radioTop.addEventListener("change", handleRadioChange);

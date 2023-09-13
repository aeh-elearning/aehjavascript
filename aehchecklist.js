let checkboxes = document.getElementsByClassName("checkbox");
let resultElement = document.getElementById("result");

// Add event listener to each checkbox
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", check);
}
function check() {
  let allChecked = true;

  // Loop through each checkbox
  for (let j = 0; j < checkboxes.length; j++) {
    if (!checkboxes[j].checked) {
      allChecked = false;
      break;
    }
  }

  if (allChecked) {
    resultElement.removeAttribute("hidden");
  } else {
    resultElement.setAttribute("hidden", true);
  }
}

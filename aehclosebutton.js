window.onload = () => {
  const closeBttn = document.getElementById("close-bttn");
  closeBttn.addEventListener("click", closeCollapse);
};
const closeCollapse = () => {
  const collapseList = document.getElementsByTagName("details");
  for (collapse of collapseList) {
    if (collapse.hasAttribute("open")) {
      collapse.removeAttribute("open");
    }
  }
};

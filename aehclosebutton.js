function closeCollapse() {
  const collapseList = document.getElementsByTagName("details");
  for (collapse of collapseList) {
    if (collapse.hasAttribute("open")) {
      collapse.removeAttribute("open");
    }
  }
}

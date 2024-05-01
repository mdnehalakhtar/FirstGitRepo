const bodyEle = document.body;
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
let flag = false;

toggleThemeBtn.addEventListener("click", () => {
  flag = !flag;
  if (flag) {
    bodyEle.style.background = "#000";
    bodyEle.style.color = "#fff";
  } else {
    bodyEle.style.background = "#fff";
    bodyEle.style.color = "#000";
  }
});
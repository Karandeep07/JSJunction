function myFunction() {
  var element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "dark" ? "light" : "dark";

  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");

  if (sun.style.zIndex == 1) {
    sun.style.zIndex = -1;
    moon.style.zIndex = 1;
  } else {
    sun.style.zIndex = 1;
    moon.style.zIndex = -1;
  }
}

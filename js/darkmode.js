function myFunction() {
  var element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";

  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");

  if (moon.style.zIndex == 1) {
    moon.style.zIndex = -1;
    sun.style.zIndex = 1;
  } else {
    moon.style.zIndex = 1;
    sun.style.zIndex = -1;
  }
}

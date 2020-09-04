function changeLogo() {
  var terrorist = document.getElementById("terrorist");
  var anti_terrorist = document.getElementById("anti-terrorist");
  var image = document.getElementById("image-logo");

  if (terrorist.checked) {
    image.href.baseVal = "./Images/hiclipart.com.png";
  }
  if (anti_terrorist.checked) {
    image.href.baseVal = "./Images/Image 1.svg";
  }
}

const circle_image = document.querySelectorAll(".circle-image");
const circle_element = document.querySelectorAll(".circle__elements");

for (let i = 0; i < circle_image.length; i++) {
  circle_image[i].addEventListener("mouseover", function () {
    console.log(circle_element[i].classList);
    circle_element[i].classList.add("hover");
  });
  circle_image[i].addEventListener("mouseleave", function () {
    console.log(circle_element[i]);
    circle_element[i].classList.remove("hover");
  });
}

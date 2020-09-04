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

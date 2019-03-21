window.onload = function() {
  document.getElementById("doge").innerHTML = "Woof!";

}

function hover() {
  document.getElementById("doge").style.display = "none";
  document.getElementById("iconDoge").style.display = "inline";
}



  function showPicture() {
var dogImg = document.getElementById("dogImg");
   if (dogImg.style.display == 'none') {
      dogImg.style.display = 'block';
    } else {
      dogImg.style.display = 'none';
    }
  }

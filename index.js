window.onload = function() {
  document.getElementById("doge").innerHTML = "Woof!";
}

function hover() {
  document.getElementById("doge").style.display = "none";
  document.getElementById("iconDoge").style.display = "inline";
}

function showPicture() {
  var dogImg = document.createElement("IMG");
  var center = document.getElementById("center");
  center.style.position="relative";
  dogImg.setAttribute("src", "doge.png");
  dogImg.setAttribute("width", "auto");
  dogImg.setAttribute("height", "auto");
  dogImg.setAttribute("alt", "doge_picture");
  dogImg.setAttribute("position","absolute");
  dogImg.setAttribute("top","0px");
  dogImg.setAttribute("left","0px");
  dogImg.style.zIndex = "1";
  center.appendChild(dogImg);
  var iconDoge=document.getElementById("iconDoge");
    iconDoge.style.zIndex = "2";
    //cant make the gog stay in the back and the icon in the middle
}

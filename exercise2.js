let hide_img = document.getElementsByClassName("galleryItem")[1];

function myFunction() {
  myImg = setInterval(hideFunc, 3000);
  myImg2 = setInterval(showFunc, 3500);
}

function hideFunc() {
  $(hide_img).hide();
}

function showFunc(){
  $(hide_img).show();
}

myFunction();

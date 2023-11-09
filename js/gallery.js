function upDate(previewPic) {
  document.getElementById('image').innerHTML = previewPic.alt;
  document.getElementById('image').style.background = "url('" + previewPic.src + "')";
}

function unDo() {
  // I used array of object .. I like the result
  var origin = ["Hover over an image below to display here.", "#8e68ff", "url('')"];

  document.getElementById('image').innerHTML = origin[0];
  document.getElementById('image').style.background = origin[1];
  document.getElementById('image').style.backgroundImage = origin[2];

}



window.onload = function () {
  my_images = document.querySelectorAll("img")
  for (let i = 0; i < my_images.length; i++) {
    my_images[i].setAttribute('onfocus', 'upDate(' + my_images[i] + ')');
    my_images[i].setAttribute('onblur', 'upDate(' + my_images[i] + ')');
  }
};
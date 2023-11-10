window.onload = function () {
  var my_images = document.querySelectorAll("img.preview");

  for (let i = 0; i < my_images.length; i++) {
    // Add event listeners for mouse events
    my_images[i].addEventListener('mouseover', function() { upDate(this); });
    my_images[i].addEventListener('mouseout', unDo);

    // Add event listeners for focus events
    my_images[i].addEventListener('focus', function() { upDate(this); });
    my_images[i].addEventListener('blur', unDo);

    // Log the event setup
    console.log('Event listeners added for image: ' + my_images[i].alt);

    // Add tabindex attribute for keyboard navigation
    my_images[i].setAttribute('tabindex', '0');
  }
};


function upDate(previewPic) {
  document.getElementById('image').innerHTML = previewPic.alt;
  document.getElementById('image').style.background = "url('" + previewPic.src + "')";
}

function unDo() {
  var origin = ["Hover over an image below to display here.", "#8e68ff", "url('')"];
  document.getElementById('image').innerHTML = origin[0];
  document.getElementById('image').style.background = origin[1];
  document.getElementById('image').style.backgroundImage = origin[2];
}

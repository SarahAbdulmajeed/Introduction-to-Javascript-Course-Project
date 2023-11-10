function addTabFocusFunctionality(image) {
    // Assuming tabfocus is a custom functionality you want to implement
    // Add your custom logic here if needed
    // This is a placeholder function
    console.log('tabfocus functionality added for image: ' + image.alt);
}

window.onload = function () {
  var my_images = document.querySelectorAll("img.preview");

  for (let i = 0; i < my_images.length; i++) {
    // Add event listeners for mouse events
    my_images[i].addEventListener('mouseover', function() { 
      upDate(this); 
      console.log('Mouseover event triggered for image: ' + my_images[i].alt);
    });
    my_images[i].addEventListener('mouseout', function() { 
      unDo(); 
      console.log('Mouseout event triggered for image: ' + my_images[i].alt);
    });

    // Add event listeners for focus events
    my_images[i].addEventListener('focus', function() { 
      upDate(this); 
      console.log('Focus event triggered for image: ' + my_images[i].alt);
    });
    my_images[i].addEventListener('blur', function() { 
      unDo(); 
      console.log('Blur event triggered for image: ' + my_images[i].alt);
    });

    // Add tabindex attribute for keyboard navigation
    my_images[i].setAttribute('tabindex', '0');
    console.log('tabindex set for image: ' + my_images[i].alt);

    // Add custom tabfocus functionality
    addTabFocusFunctionality(my_images[i]);
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

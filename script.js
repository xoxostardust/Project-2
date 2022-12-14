let eye_ref = document.querySelectorAll(".eye");

let events = ["mousemove", "touchmove"];

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

events.forEach((eventType) => {
  document.body.addEventListener(eventType, (event) => {
    eye_ref.forEach((eye) => {
      let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;

      var x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
      var y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;

      let radian = Math.atan2(x - eyeX, y - eyeY);
      //Convert Radians to Degrees
      let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
      //Rotate the eye
      eye.style.transform = "rotate(" + rotationDegrees + "deg)";
    });
  });
});


// all of the above is referenced by "coding artist" who provides free tutorials w/ html, css, and js; free to use in commercial/personal projects as long as i give credit/don't claim them as mine



function myFunction() {
    document.getElementById("links").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

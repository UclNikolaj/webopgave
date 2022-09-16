/**
 * VALIDATE FORM
*/
function validateForm() {
  const form = document.forms["contactForm"];
  const name = document.forms["contactForm"]['name'];
  const email = document.forms["contactForm"]['email'];
  const msg = document.forms["contactForm"]['msg'];

  /**
   * DISPLAY ERROR MESSAGE
  */
  if (name.value == '') {
    document.getElementById("label_" + name.name).style.display = "block";
    document.getElementById("label_" + name.name).innerHTML = "This field is required";
    document.getElementById(name.name).style.border = "1px solid rgb(213, 77, 77)";
  }
  if (email.value == '') {
    document.getElementById("label_" + email.name).style.display = "block";
    document.getElementById("label_" + email.name).innerHTML = "This field is required";
    document.getElementById(email.name).style.border = "1px solid rgb(213, 77, 77)";
  }
  if (msg.value == '') {
    document.getElementById("label_" + msg.name).style.display = "block";
    document.getElementById("label_" + msg.name).innerHTML = "This field is required";
    document.getElementById(msg.name).style.border = "1px solid rgb(213, 77, 77)";
  }

  // if any field is empty, return false (don't let the form post the data)
  if (name.value == '' || email.value == '' || msg.value == '') {
    return false;
  }

  // if all required fields are filled
  if (name.value != '' && email.value != '' && msg.value != '') {

    // remove any error display on the fields
    var allFields = ['name', 'email', 'msg'];
    allFields.forEach(hideErrorMessage);

    // reset form, so all user-input data is gone
    form.reset();


    /**
     * SHOW SUCCESS MESSAGE
    */
    var msgSuccess = document.getElementById('messageSucces');
    msgSuccess.className += " fadeIn";
    msgSuccess.style.display = "inline-block";
    msgSuccess.innerHTML = "Thank you for your message, I'll be in touch!";
    // after 5 seconds, remove success message
    setTimeout(hideSuccessMessage, 5000);

    // returning false, to stop form posting.
    return false;
  }

  /**
 * FUNCTIONS FOR RESPONSE MESSAGES
*/
  function hideErrorMessage(field) {
    document.getElementById("label_" + field).style.display = "none";
    document.getElementById("label_" + field).innerHTML = "";
    document.getElementById(field).style.border = "none";
  }

  function hideSuccessMessage() {
    msgSuccess.classList.remove('fadeIn');
    msgSuccess.className += " fadeOut";
    msgSuccess.style.display = "none";
  }
}

/**
 * SLIDER
*/
let slideIndex = 0;
runSlider();

function runSlider() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "grid";
  dots[slideIndex - 1].className += " active";
  setTimeout(runSlider, 7500); // Change image every 7.5 seconds
}

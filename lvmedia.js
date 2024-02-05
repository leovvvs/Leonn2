function validateForm() {
  var firstName = document.forms["contactForm"]["firstName"].value;
  var lastName = document.forms["contactForm"]["lastName"].value;
  var email = document.forms["contactForm"]["email"].value;
  var description = document.forms["contactForm"]["description"].value;

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    description === ""
  ) {
    alert("All fields must be filled out");
    return false;
  }

  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern)) {
    return true;
  } else {
    alert("Invalid Email Address");
    return false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const targetElement = document.querySelector(href);

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  });

  // The rest of your script
  const contactButton = document.getElementById("contact-button");
  const contactPage = document.querySelector(".contact-page");

  contactButton.addEventListener("click", () => {
    contactPage.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    document.getElementById("back-to-top-button").style.display = "block";
  } else {
    document.getElementById("back-to-top-button").style.display = "none";
  }
});



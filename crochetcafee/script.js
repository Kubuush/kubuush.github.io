//Enables the navigation to hide while scrolling down and to show while scrolling up // 
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    document.querySelector(".nav").classList.remove("hidden");
  } else {
    document.querySelector(".nav").classList.add("hidden");
  }
  
  prevScrollPos = currentScrollPos;
}
// This enables to scroll to the right section by navigation bar //
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach(link => {
      link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
          const yOffset = -60; // Adjust this value as needed to offset any fixed header
          const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: "smooth"});
      }
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const openPopupButtons = document.querySelectorAll(".openPopup");
  const closePopupButton = document.querySelector(".closePopup");
  const popupContainer = document.getElementById("popupContainer");
  const overlay = document.getElementById("overlay");

  openPopupButtons.forEach(button => {
    button.addEventListener("click", () => {
      popupContainer.style.display = "block";
      overlay.style.display = "block";
    });
  });

  closePopupButton.addEventListener("click", () => {
    popupContainer.style.display = "none";
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", () => {
    popupContainer.style.display = "none";
    overlay.style.display = "none";
  });
});
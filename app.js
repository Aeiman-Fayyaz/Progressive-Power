// Mobile menu toggle functionality
document
  .getElementById("mobileMenuButton")
  .addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("show");

    // Toggle icon between bars and times
    const icon = this.querySelector("i");
    if (mobileMenu.classList.contains("show")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

// Close mobile menu when clicking on a link
document.querySelectorAll("#mobileMenu .nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("mobileMenu").classList.remove("show");
    document
      .getElementById("mobileMenuButton")
      .querySelector("i")
      .classList.remove("fa-times");
    document
      .getElementById("mobileMenuButton")
      .querySelector("i")
      .classList.add("fa-bars");
  });
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

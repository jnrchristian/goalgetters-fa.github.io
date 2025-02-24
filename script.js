document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  });
document.getElementById('menu-toggle').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');  // Toggle the active class to show or hide the menu
});

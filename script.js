document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  });
  
  const hamburger = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('nav-links');

// Toggle the 'active' class on the nav links when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
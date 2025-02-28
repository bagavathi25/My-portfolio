// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Get the target element's ID
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Scroll to the target element
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Handle Contact Form Submission
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector('textarea').value;

  // Basic form validation
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Here you would typically send the form data to a server, but we'll simulate a success message
  alert('Your message has been sent successfully!');
  
  // Reset the form after submission
  contactForm.reset();
});
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check user preference in localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Light Mode";
}

// Toggle dark mode on button click
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙 Dark Mode";
  }
});
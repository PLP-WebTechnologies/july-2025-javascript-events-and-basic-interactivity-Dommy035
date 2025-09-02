// === Part 1: Event Handling Basics ===

// Toggle Dark Mode
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// === Part 2: Interactive Elements ===

// Counter Game
let counter = 0;
const counterValue = document.getElementById('counterValue');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');

increaseBtn.addEventListener('click', () => {
  counter++;
  counterValue.textContent = counter;
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  counterValue.textContent = counter;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// === Part 3: Form Validation ===

const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // Reset errors
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formSuccess.textContent = '';

  // Name validation
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = 'Name must be at least 3 characters';
    valid = false;
  }

  // Email validation using regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email';
    valid = false;
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    valid = false;
  }

  if (valid) {
    formSuccess.textContent = 'Registration successful!';
    form.reset();
  }
});

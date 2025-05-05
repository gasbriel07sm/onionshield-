const emailInput = document.querySelector('#email');
emailInput.addEventListener('input', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add('invalid');
  } else {
    emailInput.classList.remove('invalid');
  }
});

const passwordInput = document.querySelector('#password');
const strengthIndicator = document.querySelector('#strength-indicator');
passwordInput.addEventListener('input', () => {
  const value = passwordInput.value;
  let strength = 0;
  if (value.length >= 8) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[@$!%*?&#]/.test(value)) strength++;
  strengthIndicator.textContent = ['Fraca', 'Média', 'Forte', 'Muito Forte'][strength];
});

const confirmPasswordInput = document.querySelector('#confirm-password');
confirmPasswordInput.addEventListener('input', () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.classList.add('invalid');
  } else {
    confirmPasswordInput.classList.remove('invalid');
  }
});
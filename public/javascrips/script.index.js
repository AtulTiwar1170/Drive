const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const toggleButton = document.getElementById('toggle-button');
const formContainer = document.getElementById('form-container');

// let isLoginFormVisible = true;

// toggleButton.addEventListener('click', () => {
//     isLoginFormVisible = !isLoginFormVisible;

//     if (isLoginFormVisible) {
//         loginForm.classList.remove('hidden');
//         registerForm.classList.add('hidden');
//         toggleButton.textContent = 'Have an Account? Login';
//     } else {
//         loginForm.classList.add('hidden');
//         registerForm.classList.remove('hidden');
//         toggleButton.textContent = 'New User? Register';
//     }
// })

toggleButton.addEventListener('click', () => {
    isLoginFormVisible = !isLoginFormVisible;

    if (isLoginFormVisible) {
        formContainer.style.index.transform = 'translateX(0)'; // Move back to original position
        toggleButton.textContent = 'Have an Account? Login';
    } else {
        formContainer.style.index.transform = 'translateX(-100%)'; // Move form off-screen to the left
        toggleButton.textContent = 'New User? Register';
    }
});

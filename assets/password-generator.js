

document.addEventListener('DOMContentLoaded', function () {
    const lengthInput = document.getElementById('password-length');
    const includeLowercase = document.getElementById('include-lowercase');
    const includeUppercase = document.getElementById('include-uppercase');
    const includeNumeric = document.getElementById('include-numeric');
    const includeSpecial = document.getElementById('include-special');
    const generateButton = document.getElementById('generate-password');
    const generatedPassword = document.getElementById('generated-password');

    generateButton.addEventListener('click', function () {
        const length = parseInt(lengthInput.value);// parses a string argument and returns an integer of the specified radix
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numericChars = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let allowedChars = '';
        if (includeLowercase.checked) allowedChars += lowercaseChars;
        if (includeUppercase.checked) allowedChars += uppercaseChars;
        if (includeNumeric.checked) allowedChars += numericChars;
        if (includeSpecial.checked) allowedChars += specialChars;

        if (allowedChars.length === 0) {
            alert("Please select at least one character type.");
            return;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars.charAt(randomIndex);
        }

        generatedPassword.textContent = 'Generated Password: ' + password;
    });
});
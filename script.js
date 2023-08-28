const generateButton = document.getElementById("generateButton");
const passwordOutput = document.getElementById("passwordOutput");

const generatePassword = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const passwordLength = 12;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    passwordOutput.value = password;
};

generateButton.addEventListener("click", generatePassword);

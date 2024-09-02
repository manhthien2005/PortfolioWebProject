const texts = ["Web Developer", "Developer", "Web Designer", "Youtuber", "Script Writer"];
const typingSpeed = 300; // 0.3s per character
const delayBetweenTexts = 3000; // 3s delay

let textIndex = 0;
let charIndex = 0;

function typeText() {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
        document.querySelector('.typing-text span').textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(() => {
            document.querySelector('.typing-text span').textContent = '';
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            typeText();
        }, delayBetweenTexts);
    }
}

document.addEventListener('DOMContentLoaded', typeText);

const contentArea = document.getElementById('content-area');
const successMessage = document.getElementById('success-message');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

const funnyPhrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
];

let phraseIndex = 0;
let fontSize = 1.2;

noBtn.addEventListener('click', () => {
    // Change the text of the No button
    phraseIndex = (phraseIndex + 1) % funnyPhrases.length;
    noBtn.textContent = funnyPhrases[phraseIndex];

    // Increase the size of the Yes button
    fontSize += 0.5;
    yesBtn.style.fontSize = `${fontSize}rem`;
    yesBtn.style.padding = `${fontSize * 10}px ${fontSize * 25}px`;

    // Optional: make the No button slightly smaller or randomize position?
    // User requested "No loop and make Yes bigger", so focusing on that.
});

yesBtn.addEventListener('click', () => {
    contentArea.classList.add('hidden');
    successMessage.classList.remove('hidden');
});

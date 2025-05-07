// DOM Elements
const saveBtn = document.getElementById('save-btn');
const animateBtn = document.getElementById('animate-btn');
const animationBox = document.getElementById('animation-box');
const animatedElement = document.querySelector('.animated-element');
const usernameInput = document.getElementById('username');
const themeSelect = document.getElementById('theme');

// Load saved preferences
function loadPreferences() {
    const savedName = localStorage.getItem('username');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedName) {
        usernameInput.value = savedName;
    }
    
    if (savedTheme) {
        themeSelect.value = savedTheme;
        applyTheme(savedTheme);
    }
    
    // Show animation box if preferences exist
    if (savedName || savedTheme) {
        animationBox.classList.remove('hidden');
        animationBox.classList.add('fade-in');
    }
}

// Save preferences to localStorage
function savePreferences() {
    const username = usernameInput.value.trim();
    const theme = themeSelect.value;
    
    localStorage.setItem('username', username);
    localStorage.setItem('theme', theme);
    
    applyTheme(theme);
    
    // Show animation box with fade effect
    animationBox.classList.remove('hidden');
    animationBox.classList.add('fade-in');
    
    // Show confirmation animation
    saveBtn.classList.add('pulse');
    setTimeout(() => {
        saveBtn.classList.remove('pulse');
    }, 2000);
}

// Apply selected theme
function applyTheme(theme) {
    document.body.className = theme;
}

// Trigger custom animation
function triggerAnimation() {
    animatedElement.classList.add('animate');
    
    setTimeout(() => {
        animatedElement.classList.remove('animate');
    }, 1000);
}

// Event Listeners
saveBtn.addEventListener('click', savePreferences);
animateBtn.addEventListener('click', triggerAnimation);

// Initialize
loadPreferences();
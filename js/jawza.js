
// Define the typing speed (in milliseconds)
const typingSpeed = 100;

// Get the typing text element
const typingTextElement = document.getElementById('typing-text');

// Function to simulate the typing effect
function typeText() {
  let currentIndex = 0;
  const intervalId = setInterval(() => {
    typingTextElement.textContent += textToType[currentIndex];
    currentIndex++;
    
    if (currentIndex === textToType.length) {
      clearInterval(intervalId);
    }
  }, typingSpeed);
}

// Start the typing animation
typeText();
// Select the HTML elements by their IDs
const adviceId = document.getElementById('Advice');
const messageElement = document.getElementById('message');
const diceButton = document.getElementById('button');

// Function to fetch advice data from an API
function fetchAdvice(url, isNewAdvice = true) {
  // Fetch data from the provided URL
  fetch(url)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      // Extract the advice text and ID from the data
      const advice = data.slip.advice;
      const adviceIdNumber = data.slip.id;

      // Update the HTML elements with the advice data
      adviceId.textContent = `ADVICE #${adviceIdNumber}`;
      messageElement.textContent = isNewAdvice ? `“${advice}”` : messageElement.textContent;
    })
    .catch(error => {
      console.error('Error fetching advice:', error);
    });
}

// Call the fetchAdvice function with a flag indicating new advice on initial load
fetchAdvice('https://api.adviceslip.com/advice', true);

// Add event listener to the button for fetching new advice on click
diceButton.addEventListener('click', () => {
  fetchAdvice('https://api.adviceslip.com/advice');
});

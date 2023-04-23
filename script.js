// Fetch API keys from .env file
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Function to send a message to the chat output
function sendMessage(message, sender) {
  const chatOutput = document.getElementById('chat-output');
  const newMessage = document.createElement('div');
  newMessage.classList.add('message', sender);
  newMessage.textContent = message;
  chatOutput.appendChild(newMessage);
}

// Function to handle user input
function handleUserInput() {
  const userInput = document.getElementById('user-input');
  const userMessage = userInput.value;
  userInput.value = '';
  sendMessage(userMessage, 'user');

  // Call the appropriate API based on user input
  if (userMessage.toLowerCase().includes('coinmarketcap')) {
    // Fetch data from CoinMarketCap API
    fetchCoinMarketCapData();
  } else if (userMessage.toLowerCase().includes('google')) {
    // Fetch data from Google Custom Search API
    fetchGoogleSearchData();
  } else {
    // Call ChatGPT API
    fetchChatGptData(userMessage);
  }
}

// Function to fetch data from CoinMarketCap API
function fetchCoinMarketCapData() {
  // Use COINMARKETCAP_API_KEY to fetch data
  // Update the logic here to fetch data from CoinMarketCap API using COINMARKETCAP_API_KEY
  // and display the results in the chat output
  sendMessage('Fetching data from CoinMarketCap API...', 'system');
}

// Function to fetch data from Google Custom Search API
function fetchGoogleSearchData() {
  // Use GOOGLE_API_KEY to fetch data
  // Update the logic here to fetch data from Google Custom Search API using GOOGLE_API_KEY
  // and display the results in the chat output
  sendMessage('Fetching data from Google Custom Search API...', 'system');
}

// Function to fetch data from ChatGPT API
function fetchChatGptData(userMessage) {
  // Use OPENAI_API_KEY to fetch data
  // Update the logic here to fetch data from ChatGPT API using OPENAI_API_KEY
  // and display the results in the chat output
  sendMessage('Fetching data from ChatGPT API...', 'system');
}

// Add event listener to send button
document.getElementById('send-btn').addEventListener('click', handleUserInput);

// Add event listener to user input for Enter key press
document.getElementById('user-input').addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    handleUserInput();
  }
});

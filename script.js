const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const chatMessages = document.getElementById('chatMessages');

// Function to add a message to the chat container
function addMessage(message, role) {
  const messageElement = document.createElement('div');
  messageElement.className = 'message ' + role;
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to send user input and receive ChatGPT's reply
function sendMessage() {
  const message = userInput.value;
  addMessage(message, 'user');
  userInput.value = '';

  // Call ChatGPT API with user input as prompt
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      messages: [{ role: 'user', content: message }],
      temperature: 0.7,
      max_tokens: 50
    })
  })
  .then(response => response.json())
  .then(data => {
    const reply = data.choices[0].text;
    addMessage(reply, 'chatgpt');
  })
  .catch(error => console.error(error));
}

// Event listener for send button click
sendButton.addEventListener('click', () => {
  if (userInput.value) {
    sendMessage();
  }
});

// Event listener for enter key press in user input
userInput.addEventListener('keydown', event => {
  if (event.key === 'Enter' && userInput.value) {
    sendMessage();
  }
});


// Function to send user input and receive ChatGPT's reply
function sendMessage() {
  const message = userInput.value;
  addMessage(message, 'user');
  userInput.value = '';

  let prompt;

  // Check user input for keywords and set appropriate prompts
  if (message.toLowerCase().includes('coinmarketcap')) {
    // Prompt to get data from coinmarketcap.com
    prompt = `Get live data from coinmarketcap.com`;
  } else if (message.toLowerCase().includes('google')) {
    // Prompt to get data from google.com
    prompt = `Get live data from google.com`;
  } else {
    // Default prompt for general chat
    prompt = message;
  }

  // Call ChatGPT API with modified prompt
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 50
    })
  })
  .then(response => response.json())
  .then(data => {
    const reply = data.choices[0].text;
    addMessage(reply, 'chatgpt');
  })
  .catch(error => console.error(error));
}


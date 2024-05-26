const axios = require('axios');
const readline = require('readline');
const Docker = require('dockerode');

const docker = new Docker();
const apiKey = 'sk-proj-api>

async function chatWithGPT(messages) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    const completion = response.data.choices[0].message.cont>
    return completion.trim();
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    return null;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const messages = [
  { role: 'system', content: 'You are a helpful assistant sp>
];

async function getDockerContainers() {
  try {
    const containers = await docker.listContainers({ all: fa>
    if (containers.length === 0) {
      console.log('No running Docker containers found.');
      return;
    }
    for (const containerInfo of containers) {
      const container = docker.getContainer(containerInfo.Id>
      const containerDetails = await container.inspect();
      messages.push({ role: 'user', content: `Please review >
      const response = await chatWithGPT(messages);
      console.log('ChatGPT:', response);
      messages.push({ role: 'assistant', content: response }>
    }
  } catch (error) {
    console.error('Error fetching Docker containers:', error>
  }
  process.exit(0); // Done
}


getDockerContainers(); // Start the conversation


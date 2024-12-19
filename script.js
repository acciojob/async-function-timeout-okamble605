document.getElementById("btn").addEventListener("click", async () => {
  const text = document.getElementById("text").value; // Get the user-provided text
  const delay = parseInt(document.getElementById("delay").value, 10); // Get the user-provided delay in milliseconds

  const output = document.getElementById("output");

  // Input validation
  if (!text || isNaN(delay) || delay < 0) {
    output.textContent = "Please enter valid text and a non-negative delay.";
    return;
  }

  output.textContent = ""; // Clear the previous output

  try {
    await displayMessageAfterDelay(text, delay); // Await the message display after the specified delay
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
});

// Async function to introduce delay and display the message
async function displayMessageAfterDelay(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.getElementById("output").textContent = message; // Display the message after the delay
      resolve();
    }, delay);
  });
}

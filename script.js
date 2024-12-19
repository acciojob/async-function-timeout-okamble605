//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async () => {
  const text = document.getElementById("text").value; // Get the user-provided text
  const delay = parseInt(document.getElementById("delay").value, 10); // Get the user-provided delay

  const output = document.getElementById("output");

  // Input validation
  if (!text || isNaN(delay) || delay <= 0) {
    output.textContent = "Please enter valid text and a positive delay.";
    return;
  }

  output.textContent = "Waiting..."; // Display waiting message

  await delayMessage(text, delay); // Await the delay before showing the message
});

// Async function to handle the delay
async function delayMessage(message, delay) {
  await new Promise((resolve) => setTimeout(resolve, delay)); // Introduce a delay
  document.getElementById("output").textContent = message; // Display the message
}

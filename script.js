document.getElementById("ropeForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.getElementById("ropeLengths").value.trim();
  const resultDiv = document.getElementById("result");

  try {
    // Parse the input into an array of numbers
    const ropeLengths = input
      .split(",")
      .map((num) => parseInt(num.trim(), 10))
      .filter((num) => !isNaN(num));

    if (ropeLengths.length === 0) {
      throw new Error("Please enter valid rope lengths separated by commas.");
    }

    if (ropeLengths.length === 1) {
      resultDiv.textContent = `Minimum cost to connect ropes: 0 (Only one rope, no cost to connect)`;
      return;
    }

    // Calculate the minimum cost
    const minCost = calculateMinCost(ropeLengths);

    // Display the result
    resultDiv.textContent = `Minimum cost to connect ropes: ${minCost}`;
  } catch (error) {
    resultDiv.textContent = error.message;
  }
});

function calculateMinCost(ropeLengths) {
  // Create a Min Heap using a priority queue-like approach
  const minHeap = [...ropeLengths].sort((a, b) => a - b); // Sort initially to simulate Min Heap
  let totalCost = 0;

  // Keep connecting ropes until only one rope remains
  while (minHeap.length > 1) {
    // Remove the two smallest ropes
    const first = minHeap.shift(); // Smallest
    const second = minHeap.shift(); // Second smallest

    // Calculate the cost of connecting them
    const cost = first + second;
    totalCost += cost;

    // Insert the resulting rope back into the heap
    minHeap.push(cost);
    minHeap.sort((a, b) => a - b); // Keep it sorted to maintain the Min Heap property
  }

  return totalCost;
}


document.getElementById("ropeForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.getElementById("ropeLengths").value;
  const resultDiv = document.getElementById("result");

  try {
    // Parse input into an array of numbers
    const ropeLengths = input.split(",").map((num) => parseInt(num.trim(), 10));

    if (ropeLengths.some(isNaN)) {
      throw new Error("Please enter valid numbers separated by commas.");
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
    // Extract the two smallest ropes
    const first = minHeap.shift(); // Smallest
    const second = minHeap.shift(); // Second smallest

    // Calculate the cost of connecting them
    const cost = first + second;
    totalCost += cost;

    // Insert the new rope into the heap and keep it sorted
    minHeap.push(cost);
    minHeap.sort((a, b) => a - b);
  }

  return totalCost;
}

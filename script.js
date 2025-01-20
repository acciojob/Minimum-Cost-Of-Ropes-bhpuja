document.getElementById("ropeForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.getElementById("ropeLengths").value;
  const resultDiv = document.getElementById("result");

  try {
    // Parse the input into an array of numbers
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
  // Convert the array into a min heap
  const minHeap = [...ropeLengths].sort((a, b) => a - b);
  let totalCost = 0;

  while (minHeap.length > 1) {
    // Remove the two smallest ropes
    const first = minHeap.shift();
    const second = minHeap.shift();

    // Calculate the cost of connecting them
    const cost = first + second;
    totalCost += cost;

    // Insert the resulting rope back into the heap
    minHeap.push(cost);
    minHeap.sort((a, b) => a - b); // Keep it sorted to maintain the min-heap property
  }

  return totalCost;
}


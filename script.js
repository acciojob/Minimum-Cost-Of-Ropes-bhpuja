
  //your code here
  
  function calculateMinCost(ropeLengths) {
  // Create a Min Heap (Priority Queue)
  const minHeap = new MinHeap();

  // Add all rope lengths to the heap
  for (const length of ropeLengths) {
    minHeap.insert(length);
  }

  let totalCost = 0;

  // Keep connecting ropes until only one rope is left
  while (minHeap.size() > 1) {
    // Remove the two smallest ropes
    const first = minHeap.extractMin();
    const second = minHeap.extractMin();

    // Calculate the cost of connecting them
    const cost = first + second;
    totalCost += cost;

    // Add the resulting rope back into the heap
    minHeap.insert(cost);
  }

  return totalCost;
}

// Min Heap implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Insert an element into the heap
  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  // Extract the minimum element from the heap
  extractMin() {
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  // Get the size of the heap
  size() {
    return this.heap.length;
  }

  // Restore heap property after insertion
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;

      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  // Restore heap property after extraction
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

// Handling form submission
document.getElementById("ropeForm").addEventListener("

  
}  

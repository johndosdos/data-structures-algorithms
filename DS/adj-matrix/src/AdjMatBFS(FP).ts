// Function for creating a matrix of zeros with a given size
const CreateMatrix = function (matrixSize: number) {
  // Initialize a matrix filled with zeros
  const initMatrix = Array.from({ length: matrixSize }, () => {
    return Array.from({ length: matrixSize }, () => {
      return 0;
    });
  });

  // Function for adding an edge to the matrix with a given weight
  const addEdge = function (
    matrix: number[][],
    source: number,
    destination: number,
    weight: number
  ): number[][] {
    // Check if the weight is greater than zero
    if (weight < 0) throw new Error("Weight must be greater than zero.");

    // Create a new matrix with the updated edge
    const newMatrix = matrix.map((row, rowIndex) => {
      return row.map((value, columnIndex) =>
        rowIndex === source && columnIndex === destination ? weight : value
      );
    });

    return newMatrix;
  };

  return { initMatrix, addEdge };
};

// Function for performing Breadth-First Search on a matrix
const MatrixBFS = function (matrix: number[][]): {
  createPath(source: number, destination: number): number[];
} {
  // Function for backtracking to create the path
  const backtrack = function (
    source: number,
    destination: number,
    path: number[]
  ): number[] {
    const returnPath: number[] = [];
    let current = destination;

    // Backtrack from destination to source
    while (current !== source) {
      returnPath.push(current);
      current = path[current];
    }

    returnPath.push(source);
    returnPath.reverse();
    return returnPath;
  };

  // Function for traversing the matrix using BFS
  const traverse = function (
    source: number,
    destination: number,
    queue: number[] = [],
    path: number[] = []
  ) {
    let current = source;

    queue.push(current);

    while (queue.length) {
      if (current === destination) {
        // If the destination is reached, backtrack to create the path
        return backtrack(source, destination, path);
      }

      // Find neighbors of the current node with positive weights
      const neighbors = matrix[current]
        .map((element, index) => [index, element])
        .filter((element) => element[1] > 0);

      neighbors.map((element) => {
        const parent = element[0];

        queue.push(parent);

        if (!path.includes(parent)) {
          path[parent] = current;
        }
      });

      queue.shift();

      current = queue[0];
    }

    return path;
  };

  // Function for creating a path from source to destination
  const createPath = function (source: number, destination: number): number[] {
    // Check if the source and destination indices are within bounds
    if (source < 0 || source >= matrix.length) throw new Error("Out of bounds");
    if (destination < 0 || destination >= matrix.length)
      throw new Error("Out of bounds");

    return traverse(source, destination);
  };

  return { createPath };
};

// Main function for testing the graph functionality
const Main = function (): void {
  // Create a graph with a matrix size of 7
  const graph = CreateMatrix(7);

  // Add edges to the graph matrix
  let adjMatrix = graph.addEdge(graph.initMatrix, 0, 1, 2);
  adjMatrix = graph.addEdge(adjMatrix, 0, 2, 5);
  adjMatrix = graph.addEdge(adjMatrix, 1, 3, 8);
  adjMatrix = graph.addEdge(adjMatrix, 2, 4, 4);
  adjMatrix = graph.addEdge(adjMatrix, 3, 2, 7);
  adjMatrix = graph.addEdge(adjMatrix, 4, 3, 9);
  adjMatrix = graph.addEdge(adjMatrix, 4, 6, 10);
  adjMatrix = graph.addEdge(adjMatrix, 5, 1, 12);
  adjMatrix = graph.addEdge(adjMatrix, 6, 5, 3);

  // Use BFS to create a path from node 5 to node 6
  const BFS = MatrixBFS(adjMatrix);
  const path = BFS.createPath(5, 6);
  console.log(path);
};

// Execute the main function
Main();

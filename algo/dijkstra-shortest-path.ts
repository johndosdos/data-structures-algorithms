export {};

type Edge = {
  to: number;
  weight: number;
};

function createList(numberOfNodes: number) {
  const graphList: Map<number, Edge[]> = new Map(
    Array.from({ length: numberOfNodes }, (element, index) => [index, []])
  );

  function addEdge(source: number, destination: number, weight: number): void {
    graphList.get(source)?.push({ to: destination, weight: weight });
  }

  return { addEdge, graphList };
}

function dijkstra(graphList: Map<number, Edge[]>) {
  const distance: number[] = new Array(graphList.size).fill(Infinity);
  const prev: number[] = [];

  function backtrack(destination: number, source: number): number[] {
    const returnPath: number[] = [];
    let current = destination;

    returnPath.push(current);

    while (current !== source) {
      returnPath.push(prev[current]);
      current = prev[current];
    }

    return returnPath.reverse();
  }

  function createPath(source: number, destination: number): number[] {
    let current = source;
    if (current === undefined) throw new Error("No source node provided");
    distance[current] = 0;

    let prevNeighborWeight = 0;

    while (current !== destination) {
      const neighbors = graphList.get(current);

      if (neighbors) {
        for (const neighbor of neighbors) {
          if (prev.includes(neighbor.to)) {
            continue;
          }

          // if (!prev.includes(current)) {
          //   visited.add(current);
          // }

          if (distance[current] + neighbor.weight < distance[neighbor.to]) {
            distance[neighbor.to] = distance[current] + neighbor.weight;
            prev[neighbor.to] = current;
          }

          if (neighbor.weight < prevNeighborWeight) {
            current = neighbor.to;
          }

          if (neighbor.to === destination) {
            current = neighbor.to;
            prev.push(current);
            break;
          }

          prevNeighborWeight = neighbor.weight;
        }
      }
    }

    return backtrack(current, source);
  }

  return { createPath };
}

function main() {
  const list = createList(7);
  list.addEdge(0, 1, 3);
  list.addEdge(0, 2, 1);
  list.addEdge(1, 0, 3);
  list.addEdge(1, 2, 4);
  list.addEdge(1, 4, 1);
  list.addEdge(2, 0, 1);
  list.addEdge(2, 1, 4);
  list.addEdge(2, 3, 7);
  list.addEdge(3, 2, 7);
  list.addEdge(3, 4, 5);
  list.addEdge(3, 6, 1);
  list.addEdge(4, 1, 1);
  list.addEdge(4, 3, 5);
  list.addEdge(4, 5, 2);
  list.addEdge(5, 4, 2);
  list.addEdge(5, 2, 18);
  list.addEdge(5, 6, 1);
  list.addEdge(6, 5, 1);
  list.addEdge(6, 3, 1);

  const shortestPath = dijkstra(list.graphList);
  const result = shortestPath.createPath(0, 6);
  result;
}

main();

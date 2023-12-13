export {};

function createList(numberOfNodes: number) {
  const adjList: Map<number, number[]> = new Map(
    Array.from({ length: numberOfNodes }, (_, index) => [index, []])
  );
  //
  function addEdge(
    list: Map<number, number[]>,
    source: number,
    destination: number
  ): Map<number, number[]> {
    const updatedList = new Map(list);

    updatedList.get(source)?.push(destination);

    return updatedList;
  }
  //
  return { adjList, addEdge };
}

function traverseList(list: Map<number, number[]>) {
  //
  function DFS(
    source: number,
    destination: number,
    path: number[] = [],
    visited: Set<number> = new Set()
  ): number[] {
    const newList = new Map<number, number[]>([...list]);
    const newPath = [...path];
    const newVisited = new Set(visited);
    const current = source;
    if (current === destination) {
      return newPath.concat(current);
    }

    if (newVisited.has(current)) return [];
    newVisited.add(current);

    const neighbors = newList.get(current) as number[];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        return DFS(neighbor, destination, path.concat(current), visited);

        // if (result.length > 0) return result;
      }
    }
    return [];
  }
  //
  function createPath(source: number, destination: number) {
    return DFS(source, destination);
  }
  //
  return { createPath };
}

function main() {
  const myList = createList(6);
  let newList = myList.addEdge(myList.adjList, 0, 1);
  newList = myList.addEdge(newList, 0, 2);
  newList = myList.addEdge(newList, 1, 3);
  newList = myList.addEdge(newList, 1, 4);
  newList = myList.addEdge(newList, 2, 3);
  newList = myList.addEdge(newList, 2, 5);
  newList = myList.addEdge(newList, 3, 4);
  newList = myList.addEdge(newList, 4, 5);

  const traverse = traverseList(newList);
  const result = traverse.createPath(0, 5);
  result;
}

main();

export default class AdjMatBFS {
    #graph: number[][];
    #queue: number[];
    #returnPath: number[];
    #visited: number[];

    constructor(graph: number[][]) {
        this.#graph = graph;
        this.#queue = [];
        this.#returnPath = [];
        this.#visited = [];
    }

    #backtrack(sourceNode: number, destinationNode: number) {
        let currentNode = destinationNode;

        while (currentNode !== sourceNode) {
            this.#returnPath.unshift(currentNode);
            currentNode = this.#visited[currentNode];
        }

        this.#returnPath.unshift(sourceNode);
    }

    #traverse(sourceNode: number, destinationNode: number): number[] {
        let currentNode = sourceNode;

        this.#queue.push(currentNode);

        while (this.#queue.length) {
            const removed = this.#queue.shift() as number;

            const neighbors: number[][] = this.#graph[currentNode]
                .map((value, index) => [index, value])
                .filter((value) => value[1] > 0);

            if (currentNode === destinationNode) {
                this.#backtrack(sourceNode, destinationNode);

                break;
            }

            for (const [node, weight] of neighbors) {
                if (!this.#visited.includes(node)) {
                    this.#queue.push(node);
                    this.#visited[node] = currentNode;
                }
            }

            this.#visited.push(removed);

            currentNode = this.#queue[0];
        }

        return this.#returnPath;
    }

    public createPath(
        sourceNode: number,
        destinationNode: number
    ): number[] | string {
        if (
            sourceNode >= this.#graph.length ||
            destinationNode >= this.#graph.length ||
            sourceNode < 0 ||
            destinationNode < 0
        ) {
            return "path does not exist";
        }

        return this.#traverse(sourceNode, destinationNode);
    }
}

type mainNode = string;
type adjNode = string;
type weight = number;

class GraphList {
    #adjacencyMap: Map<mainNode, Record<adjNode, weight>>;

    constructor() {
        this.#adjacencyMap = new Map();
    }

    addEdges(node1: string, node2: string, weight: number) {
        if (!this.#adjacencyMap.has(node1)) {
            this.#adjacencyMap.set(node1, {});
        }

        const node1Access = this.#adjacencyMap.get(node1);
        if (node1Access) node1Access[node2] = weight;

        if (!this.#adjacencyMap.has(node2)) {
            this.#adjacencyMap.set(node2, {});
        }

        const node2Access = this.#adjacencyMap.get(node2);
        if (node2Access) node2Access[node1] = weight;

        console.log(this.#adjacencyMap);
    }
}

const adjMat = new GraphList();
adjMat.addEdges("a", "b", 5);
adjMat.addEdges("b", "c", 5);
adjMat.addEdges("c", "d", 10);
adjMat.addEdges("d", "a", 10);

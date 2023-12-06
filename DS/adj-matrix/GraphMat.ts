export default class GraphMat {
    #adjMatrix: number[][];

    constructor(numOfVertices: number) {
        this.#adjMatrix = [];
        for (let i = 0; i < numOfVertices; i++) {
            this.#adjMatrix[i] = [];
            for (let j = 0; j < numOfVertices; j++) {
                this.#adjMatrix[i][j] = 0;
            }
        }
    }

    public addEdge(origNode: number, destNode: number, weight: number) {
        this.#adjMatrix[origNode][destNode] = weight;
    }

    public printMat() {
        console.log(this.#adjMatrix);
    }

    public checkConnections(origNode: number) {
        console.log(this.#adjMatrix[origNode]);
    }
}

const graph = new GraphMat(4);

graph.addEdge(0, 1, 5);
graph.addEdge(1, 3, 10);
graph.addEdge(2, 0, 10);
graph.addEdge(2, 1, 10);
graph.addEdge(3, 1, 10);

graph.printMat();

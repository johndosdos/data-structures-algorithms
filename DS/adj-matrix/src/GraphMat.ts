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

    public printMat(): number[][] {
        return this.#adjMatrix;
    }

    public checkConnections(origNode: number) {
        console.log(this.#adjMatrix[origNode]);
    }
}

const CreateMatrix = function (matrixSize: number) {
    const initMatrix = Array.from({ length: matrixSize }, () => {
        return Array.from({ length: matrixSize }, () => {
            return 0;
        });
    });

    const addEdge = function (
        matrix: number[][],
        source: number,
        destination: number,
        weight: number
    ): number[][] {
        if (weight < 0) throw new Error("Weight must be greater than zero.");

        const newMatrix = matrix.map((row, rowIndex) => {
            return row.map((value, columnIndex) =>
                rowIndex === source && columnIndex === destination
                    ? weight
                    : value
            );
        });

        return newMatrix;
    };

    return { initMatrix, addEdge };
};

const MatrixBFS = function (matrix: number[][]): {
    createPath(source: number, destination: number): number[];
} {
    const backtrack = function (
        source: number,
        destination: number,
        path: number[]
    ): number[] {
        const returnPath: number[] = [];
        let current = destination;

        while (current !== source) {
            returnPath.unshift(current);
            current = path[current];
        }

        returnPath.unshift(source);
        return returnPath;
    };

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
                return backtrack(source, destination, path);
            }

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

    const createPath = function (
        source: number,
        destination: number
    ): number[] {
        if (source < 0 || source >= matrix.length)
            throw new Error("Out of bounds");
        if (destination < 0 || destination >= matrix.length)
            throw new Error("Out of bounds");

        // console.assert(
        //     source >= 0 && source < matrix.length,
        //     "Invalid source index"
        // );
        // console.assert(
        //     destination >= 0 && destination < matrix.length,
        //     "Invalid destination index"
        // );

        return traverse(source, destination);
    };

    return { createPath };
};

const Main = function (): void {
    const graph = CreateMatrix(7);

    let adjMatrix = graph.addEdge(graph.initMatrix, 0, 1, 2);
    adjMatrix = graph.addEdge(adjMatrix, 0, 2, 5);
    adjMatrix = graph.addEdge(adjMatrix, 1, 3, 8);
    adjMatrix = graph.addEdge(adjMatrix, 2, 4, 4);
    adjMatrix = graph.addEdge(adjMatrix, 3, 2, 7);
    adjMatrix = graph.addEdge(adjMatrix, 4, 3, 9);
    adjMatrix = graph.addEdge(adjMatrix, 4, 6, 10);
    adjMatrix = graph.addEdge(adjMatrix, 5, 1, 12);
    adjMatrix = graph.addEdge(adjMatrix, 6, 5, 3);

    const BFS = MatrixBFS(adjMatrix);
    const path = BFS.createPath(5, 6);
    console.log(path);
};
Main();

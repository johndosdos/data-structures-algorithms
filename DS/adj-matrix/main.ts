import GraphMat from "./src/GraphMat";
import AdjMatBFS from "./src/AdjMatBFS";

function main() {
    //create the graph
    const graphMat = new GraphMat(7);
    /*     graphMat.addEdge(0, 1, 3);
    graphMat.addEdge(0, 2, 1);
    graphMat.addEdge(1, 4, 1);
    graphMat.addEdge(2, 3, 7);
    graphMat.addEdge(4, 1, 1);
    graphMat.addEdge(4, 3, 5);
    graphMat.addEdge(4, 5, 2);
    graphMat.addEdge(5, 2, 18);
    graphMat.addEdge(5, 6, 1);
    graphMat.addEdge(6, 3, 1); */

    graphMat.addEdge(0, 1, 1);
    graphMat.addEdge(0, 2, 1);
    graphMat.addEdge(1, 3, 1);
    graphMat.addEdge(2, 4, 1);
    graphMat.addEdge(3, 2, 1);
    graphMat.addEdge(4, 3, 1);
    graphMat.addEdge(4, 6, 1);
    graphMat.addEdge(5, 1, 1);
    graphMat.addEdge(6, 5, 1);

    const graph = graphMat.printMat();
    // console.log(graph);

    //search the graph
    const adjMatBFS = new AdjMatBFS(graph);
    //create the path from Origin to Destination
    const out = adjMatBFS.createPath(3, 1);
    console.log(out);
}

main();

/*  [0, 3, 1, 0, 0, 0, 0]
    [0, 0, 0, 0, 1, 0, 0]
    [0, 0, 0, 7, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0]
    [0, 1, 0, 5, 0, 2, 0]
    [0, 0, 18, 0, 0, 0, 1]
    [0, 0, 0, 1, 0, 0, 0] */

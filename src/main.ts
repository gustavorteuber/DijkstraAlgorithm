import Graph from "./datastructures/Graph";
import Dijkstra from "./algorithms/Dijkstra";

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B', 5);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 3);
graph.addEdge('B', 'D', 2);
graph.addEdge('C', 'D', 1);

const dijkstra = new Dijkstra(graph);
const result = dijkstra.findShortestPath('A', 'D');

console.log(result);

console.log('Shortest Path:', result.path);
console.log('Shortest Distance:', result.distance);
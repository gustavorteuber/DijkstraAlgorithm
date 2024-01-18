import Graph from "../datastructures/Graph";

export default class Dijkstra {
  readonly graph: Graph;

  constructor(graph: Graph) {
    this.graph = graph;
  }

  findShortestPath(start: string, end: string): { path: string[], distance: number } {
    const distances: Map<string, number> = new Map();
    const visited: Set<string> = new Set();
    const previous: Map<string, string | null> = new Map();

    this.graph.getVertices().forEach(vertex => {
      distances.set(vertex, Infinity);
      previous.set(vertex, null);
    });

    distances.set(start, 0);

    while (visited.size < this.graph.getVertices().length) {
      const currentVertex = this.getMinVertex(distances, visited);
      visited.add(currentVertex);

      this.updateDistances(currentVertex, distances, previous);
    }

    return this.buildPath(start, end, previous, distances);
  }
  private getMinVertex(distances: Map<string, number>, visited: Set<string>): string {
    let minVertex = '';
    let minDistance = Infinity;

    distances.forEach((distance, vertex) => {
      if (distance < minDistance && !visited.has(vertex)) {
        minDistance = distance;
        minVertex = vertex;
      }
    });

    return minVertex;
  } 

  private updateDistances(currentVertex: string, distances: Map<string, number>, previous: Map<string, string | null>): void {
    this.graph.getEdges(currentVertex)?.forEach((weight, neighbor) => {
      const distance = distances.get(currentVertex) || 0 + weight;
      if (distance < (distances.get(neighbor) || 0)) {
        distances.set(neighbor, distance);
        previous.set(neighbor, currentVertex);
      }
    });
  }

  private buildPath(start: string, end: string, previous: Map<string, string | null>, distance: Map<string, number>): {path: string[], distance: number} {
    const path: string[] = [];
    let currentVertex = end;

    while (currentVertex !== start) {
      path.unshift(currentVertex);
      currentVertex = previous.get(currentVertex) ?? '';
    }

    path.unshift(start);

    return {
      path,
      distance: distance.get(end)!
    }
  }


}
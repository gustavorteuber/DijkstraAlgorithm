export default class Graph {
  readonly vertices: Map<string, Map<string, number>>;

  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex: string) {
      this.vertices.set(vertex, new Map());
  }

  addEdge(source: string, destination: string, weight: number): void {
      this.vertices.get(source)?.set(destination, weight);
      this.vertices.get(destination)?.set(source, weight);
  }
  getVertices(): string[] {
    return Array.from(this.vertices.keys());
  }

  getEdges(vertex: string): Map<string, number> | undefined {
    return this.vertices.get(vertex);
  }
}
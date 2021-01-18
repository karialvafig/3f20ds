function Vertex(label) {
    this.label = label;
}
class Grafo {
    constructor(v) {
        this.Vertices = v;
        this.Edges = 0;
        this.adj = [];
        for (var i = 0; i < this.Vertices; ++i) {
            this.adj[i] = [];
            this.adj[i].push("");
        }
    }
    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.Edges++;
    }
    showGraph() {
        let a = "";
        for (var i = 0; i < this.Vertices; ++i) {
            a = (i + " -> ");
            for (var j = 0; j < this.Vertices; ++j) {
                if (this.adj[i][j] != undefined)
                    a = a + (this.adj[i][j] + '  ');
            }
            console.log(a)
        }
    }
}
let grafo = new Grafo(5);
grafo.addEdge(0,1);
grafo.addEdge(0,2);
grafo.addEdge(0,3);
grafo.addEdge(3,4);
grafo.showGraph();
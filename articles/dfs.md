# Depth First Search (DFS)

**Depth first Search or Depth first traversal** is a recursive algorithm for searching all the vertices of a graph or tree data structure. Traversal means visiting all the nodes of a graph.

---

### Depth First Search Algorithm

A standard DFS implementation puts each vertex of the graph into one of two categories:

1. Visited
2. Not Visited

The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.

The DFS algorithm works as follows:

1. Start by putting any one of the graph's vertices on top of a stack.
2. Take the top item of the stack and add it to the visited list.
3. Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack.
4. Keep repeating steps 2 and 3 until the stack is empty.

---

### Depth First Search Example

Let's see how the Depth First Search algorithm works with an example. We use an undirected graph with 5 vertices.

![notation](dfs0.webp)

We start from vertex 0, the DFS algorithm starts by putting it in the Visited list and putting all its adjacent vertices in the stack.

![notation](dfs1.webp)

Next, we visit the element at the top of stack i.e. 1 and go to its adjacent nodes. Since 0 has already been visited, we visit 2 instead.

![notation](dfs2.webp)

Vertex 2 has an unvisited adjacent vertex in 4, so we add that to the top of the stack and visit it.

![notation](dfs3.webp)

![notation](dfs4.webp)

After we visit the last element 3, it doesn't have any unvisited adjacent nodes, so we have completed the Depth First Traversal of the graph.

![notation](dfs5.webp)

---

### DFS Pseudocode (recursive implementation)

The pseudocode for DFS is shown below. In the init() function, notice that we run the DFS function on every node. This is because the graph might have two different disconnected parts so to make sure that we cover every vertex, we can also run the DFS algorithm on every node.

    DFS(G, u)
        u.visited = true
        For each v ∈ G.Adj[u]
            If v.visited == false
                DFS(G,v)
        
    init() {
        For each u ∈ G
            u.visited = false
        For each u ∈ G
        DFS(G, u)
    }

---

### Implementation

    class Graph {
        int numVertices;
        list<int> *adjLists;
        bool *visited;

    public:
        Graph(int V);
        void addEdge(int src, int dest);
        void DFS(int vertex);
    };

    // Initialize graph
    Graph::Graph(int vertices) {
        numVertices = vertices;
        adjLists = new list<int>[vertices];
        visited = new bool[vertices];
    }

    // Add edges
    void Graph::addEdge(int src, int dest) {
        adjLists[src].push_front(dest);
    }

    // DFS algorithm
    void Graph::DFS(int vertex) {
        visited[vertex] = true;
        list<int> adjList = adjLists[vertex];

        cout << vertex << " ";

        list<int>::iterator i;
        for (i = adjList.begin(); i != adjList.end(); ++i)
            if (!visited[*i])
                DFS(*i);
    }

---

### Complexity of Depth First Search

The time complexity of the DFS algorithm is represented in the form of `O(V + E)`, where `V` is the number of nodes and `E` is the number of edges.

The space complexity of the algorithm is `O(V)`.

---

### Application of DFS Algorithm

1. For finding the path
2. To test if the graph is bipartite
3. For finding the strongly connected components of a graph
4. For detecting cycles in a graph
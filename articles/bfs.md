# Breadth First Search (BFS)

**Breadth First Traversal or Breadth First Search** is an iterative algorithm for searching all the vertices of a graph or tree data structure.

---

### BFS algorithm

A standard BFS implementation puts each vertex of the graph into one of two categories:

1. Visited
2. Not Visited

The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.

The algorithm works as follows:

1. Start by putting any one of the graph's vertices at the back of a queue.
2. Take the front item of the queue and add it to the visited list.
3. Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the back of the queue.
4. Keep repeating steps 2 and 3 until the queue is empty.

The graph might have two different disconnected parts so to make sure that we cover every vertex, we can also run the BFS algorithm on every node

---

### BFS example

Let's see how the Breadth First Search algorithm works with an example. We use an undirected graph with 5 vertices.

![notation](bfs0.webp)

We start from vertex 0, the BFS algorithm starts by putting it in the Visited list and putting all its adjacent vertices in the queue.

![notation](bfs1.webp)

Next, we visit the element at the front of queue i.e. 1 and go to its adjacent nodes. Since 0 has already been visited, we visit 2 instead.

![notation](bfs2.webp)

Vertex 2 has an unvisited adjacent vertex in 4, so we add that to the back of the queue and visit 3, which is at the front of the queue.

![notation](bfs3.webp)

![notation](bfs4.webp)

Only 4 remains in the queue since the only adjacent node of 3 i.e. 0 is already visited. We visit it.

![notation](bfs5.webp)

Since the queue is empty, we have completed the Breadth First Traversal of the graph.

---

### BFS pseudocode

    create a queue Q 
    mark v as visited and put v into Q 
    while Q is non-empty 
        remove the head u of Q 
        mark and enqueue all (unvisited) neighbours of u

---

### Implementation

    class Graph {
        int numVertices;
        list<int>* adjLists;
        bool* visited;

    public:
        Graph(int vertices);
        void addEdge(int src, int dest);
        void BFS(int startVertex);
    };

    // Create a graph with given vertices,
    // and maintain an adjacency list
    Graph::Graph(int vertices) {
        numVertices = vertices;
        adjLists = new list<int>[vertices];
    }

    // Add edges to the graph
    void Graph::addEdge(int src, int dest) {
        adjLists[src].push_back(dest);
        adjLists[dest].push_back(src);
    }

    // BFS algorithm
    void Graph::BFS(int startVertex) {
        visited = new bool[numVertices];
        for (int i = 0; i < numVertices; i++)
            visited[i] = false;

        list<int> queue;

        visited[startVertex] = true;
        queue.push_back(startVertex);

        list<int>::iterator i;

        while (!queue.empty()) {
            int currVertex = queue.front();
            cout << "Visited " << currVertex << " ";
            queue.pop_front();

            for (i = adjLists[currVertex].begin(); i != adjLists[currVertex].end(); ++i) {
                int adjVertex = *i;
                if (!visited[adjVertex]) {
                    visited[adjVertex] = true;
                    queue.push_back(adjVertex);
                }
            }
        }
    }

---

### BFS Algorithm Complexity

The time complexity of the BFS algorithm is represented in the form of `O(V + E)`, where `V` is the number of nodes and `E` is the number of edges.

The space complexity of the algorithm is `O(V)`.

---

### BFS Algorithm Applications

1. To build index by search index
2. For GPS navigation
3. Path finding algorithms
4. In Ford-Fulkerson algorithm to find maximum flow in a network
5. Cycle detection in an undirected graph
6. In minimum spanning tree

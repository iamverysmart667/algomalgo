# Dijkstra's Algorithm

`Dijkstra's algorithm` allows us to find the shortest path between any two vertices of a graph.

It differs from the minimum spanning tree because the shortest distance between two vertices might not include all the vertices of the graph.

---

### How Dijkstra's Algorithm works

Dijkstra's Algorithm works on the basis that any subpath `B -> D` of the shortest path `A -> D` between vertices A and D is also the shortest path between vertices B and D.

![notation](dijkstra0.webp)

Djikstra used this property in the opposite direction i.e we overestimate the distance of each vertex from the starting vertex. Then we visit each node and its neighbors to find the shortest subpath to those neighbors.

The algorithm uses a greedy approach in the sense that we find the next best solution hoping that the end result is the best solution for the whole problem.

---

### Example of Dijkstra's algorithm

It is easier to start with an example and then think about the algorithm.

![notation](dijkstra1.webp)

![notation](dijkstra2.webp)

![notation](dijkstra3.webp)

![notation](dijkstra4.webp)

![notation](dijkstra5.webp)

![notation](dijkstra6.webp)

![notation](dijkstra7.webp)

![notation](dijkstra8.webp)

---

### Djikstra's algorithm pseudocode

We need to maintain the path distance of every vertex. We can store that in an array of size v, where v is the number of vertices.

We also want to be able to get the shortest path, not only know the length of the shortest path. For this, we map each vertex to the vertex that last updated its path length.

Once the algorithm is over, we can backtrack from the destination vertex to the source vertex to find the path.

A minimum priority queue can be used to efficiently receive the vertex with least path distance.

    function dijkstra(G, S)
        for each vertex V in G
            distance[V] <- infinite
            previous[V] <- NULL
            If V != S, add V to Priority Queue Q
        distance[S] <- 0
        
        while Q IS NOT EMPTY
            U <- Extract MIN from Q
            for each unvisited neighbour V of U
                tempDistance <- distance[U] + edge_weight(U, V)
                if tempDistance < distance[V]
                    distance[V] <- tempDistance
                    previous[V] <- U
        return distance[], previous[]

---

### Implementation

    void Dijkstras();
    vector<Node*>* AdjacentRemainingNodes(Node* node);
    Node* ExtractSmallest(vector<Node*>& nodes);
    int Distance(Node* node1, Node* node2);
    bool Contains(vector<Node*>& nodes, Node* node);

    vector<Node*> nodes;
    vector<Edge*> edges;

    class Node {
    public:
        Node(char id) : id(id), previous(NULL), distanceFromStart(INT_MAX) { nodes.push_back(this); }

    public:
        char id;
        Node* previous;
        int distanceFromStart;
    };

    class Edge {
    public:
        Edge(Node* node1, Node* node2, int distance) : node1(node1), node2(node2), distance(distance) { edges.push_back(this); }
        bool Connects(Node* node1, Node* node2) {
            return (
            (node1 == this->node1 && node2 == this->node2) ||
            (node1 == this->node2 && node2 == this->node1));
        }

    public:
        Node* node1;
        Node* node2;
        int distance;
    };

    void Dijkstras() {
        while (nodes.size() > 0) {
            Node* smallest = ExtractSmallest(nodes);
            vector<Node*>* adjacentNodes =
            AdjacentRemainingNodes(smallest);

            const int size = adjacentNodes->size();
            for (int i = 0; i < size; ++i) {
                Node* adjacent = adjacentNodes->at(i);
                int distance = Distance(smallest, adjacent) +
                        smallest->distanceFromStart;

                if (distance < adjacent->distanceFromStart) {
                    adjacent->distanceFromStart = distance;
                    adjacent->previous = smallest;
                }
            }
            delete adjacentNodes;
        }
    }

    // Find the node with the smallest distance,
    // remove it, and return it.
    Node* ExtractSmallest(vector<Node*>& nodes) {
        int size = nodes.size();
        if (size == 0) return NULL;
        int smallestPosition = 0;
        Node* smallest = nodes.at(0);
        for (int i = 1; i < size; ++i) {
            Node* current = nodes.at(i);
            if (current->distanceFromStart < smallest->distanceFromStart) {
                smallest = current;
                smallestPosition = i;
            }
        }
        nodes.erase(nodes.begin() + smallestPosition);
        return smallest;
    }

    // Return all nodes adjacent to 'node' which are still
    // in the 'nodes' collection.
    vector<Node*>* AdjacentRemainingNodes(Node* node) {
        vector<Node*>* adjacentNodes = new vector<Node*>();
        const int size = edges.size();
        for (int i = 0; i < size; ++i) {
            Edge* edge = edges.at(i);
            Node* adjacent = NULL;
            if (edge->node1 == node) {
                adjacent = edge->node2;
            } else if (edge->node2 == node) {
                adjacent = edge->node1;
            }
            if (adjacent && Contains(nodes, adjacent)) {
                adjacentNodes->push_back(adjacent);
            }
        }
        return adjacentNodes;
    }

    // Return distance between two connected nodes
    int Distance(Node* node1, Node* node2) {
        const int size = edges.size();
        for (int i = 0; i < size; ++i) {
            Edge* edge = edges.at(i);
            if (edge->Connects(node1, node2)) {
                return edge->distance;
            }
        }
        return -1;  // should never happen
    }

    // Does the 'nodes' vector contain 'node'
    bool Contains(vector<Node*>& nodes, Node* node) {
        const int size = nodes.size();
        for (int i = 0; i < size; ++i) {
            if (node == nodes.at(i)) {
                return true;
            }
        }
        return false;
    }

---

### Dijkstra's Algorithm Complexity

Time Complexity: `O(E Log V)`

where, E is the number of edges and V is the number of vertices.

Space Complexity: `O(V)`

---

### Dijkstra's Algorithm Applications

* To find the shortest path
* In social networking applications
* In a telephone network
* To find the locations in the map

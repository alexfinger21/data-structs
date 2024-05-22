function bfs(root, val) {
    const nodeStack = new Array()
    const visited = new Array()

    nodeStack.push(root)
    visited.push(root)

    while (nodeStack.length != 0) {
        const last = nodeStack.splice(0, 1)[0]

        for (const x of last.connections) {

            if (visited.indexOf(x) == -1) {
                if (x.value == val) {
                    return x
                }
                visited.push(x)
                nodeStack.push(x)
            }
        }
    }

    return -1
}


function createNode(val, idx, parent) {
    return {
        value: val,
        index: idx,
        connections: parent ? [parent] : []
    }
} 

const special = 69
const numConnections = 1000
const chance = 0.01

const nodes = new Array()
nodes.push(createNode(1, 0, null))

for (let i = 1; i<numConnections; ++i) {
    const parentIdx = Math.floor(Math.random() * nodes.length)

    const random = Math.random() < chance
    const newNode = createNode(random ? special : 420, i, nodes[parentIdx])

    nodes[parentIdx].connections.push(newNode)
    nodes.push(newNode)
}

console.log(nodes)
console.log(bfs(nodes[0], special))


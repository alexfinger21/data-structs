const data = {
    "alex": [3, 4, 4, 0],
    "john": [5, 5, 5, 1],
    "jeff": [4, 4, 4, 0],
    "ant": [3, 2, 3, 0],
    "dan": [8, 3, 2, 1],
    "dave": [8, 8, 8, 1],
    "pon": [4, 3, 10, 0],
    "nick": [10, 8, 1, 1],
}

function findClosest(node, nbrs, k) {
    const dists = []
    const v = data[node] 
    const len = v.length

    for (const n of Object.keys(nbrs)) {
        if (n != node) {
            dists.push([n, nbrs[n].slice(0, -1).reduce((a, c, i) =>  a + (v[i] - c)*(v[i] - c))])
        }
    }

    dists.sort((a, b) => {
        return b[1] - a[1]
    })

    dists.length = k

    let res = 0
    console.log(dists)

    for (const n of dists) {
        res += nbrs[n[0]][len-1]; 
    } 

    return res/k
}

console.log(findClosest("alex", data, 3))

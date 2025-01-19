const graph = {
    "start": { "a": 1 },
    "a": { "b": 2 },
    "b": { "c": 3 },
    "c": { "d": 4 },
    "d": { "fin": 5 },
    "fin": {}
};


function dijkstra(g) {
    const parents = {"start": null}
    const costs = {"start": 0}
    const glen = Object.keys(graph).length
    const processed = []
    
    while (processed.length < glen) {
        let minC = Infinity
        let minN = null
        
        for (const p of Object.keys(parents)) {
            if (!processed.includes(p) && minC > costs[p]) {
                minC = costs[p]
                minN = p
            }
        }
        
        if (minN) {
            for (const c of Object.keys(g[minN])) {
                if (!costs[c] || costs[c] > costs[minN] + g[minN][c]){
                    costs[c] = costs[minN] + g[minN][c]
                    parents[c] = minN
                }
            }
            processed.push(minN)
        } else {
            break
        }
    }
    return costs["fin"]
}
console.log(dijkstra(graph))

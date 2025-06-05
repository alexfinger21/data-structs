class dsu {
    constructor(size) {
        this.parent = new Array(size)
        this.rank = new Array(size).fill(1)

        for (let i = 0; i<size; ++i) {
            this.parent[i] = i
        }
    }

    find(i) {
        const parent_i = this.parent[i]

        if (parent_i == i) {
            return i
        }

        this.rank[i] = 1
        return this.parent[i] = this.find(parent_i)
    }

    union(i, j) {
        const p_i = this.find(i)
        const p_j = this.find(j)

        if (p_i == p_j) {
            return -1
        }

        if (this.rank[p_i] > this.rank[p_j]) {
            this.parent[p_j] = p_i 
        } else if (this.rank[p_i] < this.rank[p_j]) {
            this.parent[p_i] = p_j 
        } else {
            this.parent[p_j] = p_i
            ++this.rank[p_i]
        }

        return 0
    }
}

// test

const n = 5

const dsu_test = new dsu(n)

dsu_test.union(0, 2)

// 4 is a friend of 2
dsu_test.union(4, 2)

// 3 is a friend of 1
dsu_test.union(3, 1)

if (dsu_test.find(4) == dsu_test.find(0)) {
    console.log("Yes")
} else {
    console.log("No")
}

if (dsu_test.find(1) == dsu_test.find(0)) {
    console.log("Yes")
} else {
    console.log("No")
}

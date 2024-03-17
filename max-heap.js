class maxHeap {
    constructor(...elements) {
        this.heap = new Array()
        elements.forEach(e => {
            this.push(e)
        })
    }

    getParentIndex(i) {
        return Math.floor((i-1)/2)
    }

    getLeftIndex(i) {
        return i*2 + 1
    }

    getRightIndex(i) {
        return i*2 + 2
    }
    
    parent(i) {
        return this.heap[this.getParentIndex(i) < 0 ? 0 : this.getParentIndex(i)]
    }

    left(i) {
        return this.heap[this.getLeftIndex(i)]
    }

    right(i) {
        return this.heap[this.getRightIndex(i)]
    }
    
    swap(i, j) {
        const temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }

    push(a) {
        this.heap.push(a)
        let pos = this.heap.length - 1

        while (this.heap[pos] > this.parent(pos)) {
            this.swap(pos, this.getParentIndex(pos))
            pos = this.getParentIndex(pos)
        }
    }

    heapify(i) {
        let largest = i
        const left = this.left(i)
        const right = this.right(i)

        if (left && left > this.heap[largest]) {
            largest = this.getLeftIndex(i)
        } 

        if (right && right > this.heap[largest]) {
            largest = this.getRightIndex(i)
        } 

        if (largest != i) {
            this.swap(i, largest)
            this.heapify(largest)
        }
    }

    pop() {
        if (this.heap.length > 0) {
          this.swap(0, this.heap.length - 1)
          const temp = this.heap.pop()

          this.heapify(0)
          return temp
        }
    }
}

const proHeap = new maxHeap(1, 2, 69)
proHeap.push(53)
proHeap.push(54)
proHeap.push(15)

proHeap.push(100)

console.log(proHeap)

for (let i = 0; i<4; ++i){
  console.log(proHeap.pop())
  console.log(proHeap)
}

proHeap.push(102)
for (let i = 0; i<4; ++i){
  console.log(proHeap.pop())
  console.log(proHeap)
}

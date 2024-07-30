function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    const pivot = arr[Math.floor(Math.random()*arr.length)]
    const less = arr.filter(e => e < pivot)
    const greater = arr.filter(e => e >= pivot)

    return [...quicksort(less), pivot, ...quicksort(greater)]
}

console.log(quickSort([420, 69, 123]))

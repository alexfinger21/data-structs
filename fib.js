
function fib(cnt, t1=0, t2=1) {
    if (cnt <= 0) {
        return t2;
    }
    return fib(cnt-1, t2, t1+t2)
}

console.log(fib(13), fib(14));

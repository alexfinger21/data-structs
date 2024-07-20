#include <iostream>

using namespace std;

int tail_factorial(int n, int prev) {
    if (n == 1) {
        return prev;
    }

    return tail_factorial(n - 1, prev * n);
}

int32_t main() {
    cout << "enter factorial: ";
    
    int n;
    cin >> n;

    cout << "factorial: " << tail_factorial(n, 1) << '\n';
}

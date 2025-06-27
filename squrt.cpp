#include <iostream>

using namespace std;
using ll=long long;

double squar(ll &n) {
    double init = 1;

    for (int i = 0; i<10; ++i) {
        init -= (init*init-n) / (2*init);

        if (init * init == n) {
            break;
        }
    }

    return init;
}

int main() {
    cout << "give num: ";
    ll n;
    cin >> n;

    cout << squar(n) << endl;
    return 0;
}

/*

QUESTION
8. [M25] Give an “effective” formal algorithm for computing the greatest common
divisor of positive integers m and n, by specifying θj, ϕj, aj, bj as in Eqs. (3). Let the
input be represented by the string ambn, that is, m a’s followed by n b’s. Try to make
your solution as simple as possible. [Hint: Use Algorithm E, but instead of division in
step E1, set r ← |m − n|, n ← min(m, n).]

ANSWER
Let A = {a, b, c}, N = 5. The algorithm will terminate with the string agcd(m,n).

j    θj       ϕj    bj aj
-------------------------
0    ab    (empty)  1  2   Remove one a and one b, or go to 2.
1 (empty)     c     0  0   Add c at extreme left, go back to 0.
2    a        b     2  3   Change all a’s to b’s.
3    c        a     3  4   Change all c’s to a’s.
4    b        b     0  5   If b’s remain, repeat.

Each iteration either decreases m or keeps m unchanged and decreases n.

*/

function thereIsAB(o: string): [boolean, number] {
    let notFound: boolean = true;
    let i: number = 0;

    while (notFound && i < o.length) {
        if (o[i] + o[i + 1] === 'ab') {
            notFound = false;
        }
        i++;
    }

    return [!notFound, i - 1];
}

function thereIsB(o: string) {
    return o.includes('b');
}

let m: number = 119;
let n: number = 544;
let o: string = 'a'.repeat(m) + 'b'.repeat(n);

// j = 4
while (thereIsB(o)) {
    let res = thereIsAB(o);
    while (res[0]) {
        // j = 0
        o = o.slice(0, res[1]) + o.slice(res[1] + 2);

        // j = 1
        o = 'c' + o;

        res = thereIsAB(o);
    }

    // j = 2
    for (let i: number = 0; i < o.length; i++) {
        if (o[i] === 'a') {
            o = o.replace(o[i], 'b');
        }
    }

    // j = 3
    for (let i: number = 0; i < o.length; i++) {
        if (o[i] === 'c') {
            o = o.replace(o[i], 'a');
        }
    }
}

// j = 5
console.log('GDC: ' + (o.match(/a/g) || []).length);

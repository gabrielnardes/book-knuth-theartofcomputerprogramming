/*
Page 2

Algorithm E (Euclid’s algorithm). Given two positive integers m and n, find
their greatest common divisor, that is, the largest positive integer that evenly
divides both m and n.

E1. [Find remainder.] Divide m by n and let r be the remainder. (We will have
0 ≤ r < n.)
E2. [Is it zero?] If r = 0, the algorithm terminates; n is the answer.
E3. [Reduce.] Set m ← n, n ← r, and go back to step E1

*/

function printAnswer(
    functionName: string,
    M: number,
    N: number,
    n: number,
    iterations: number
) {
    console.log(
        `${functionName}() \nGCD between ${M} and ${N} = ${n}, resolved with ${iterations} iterations\n`
    );
}

function findGCDLoop(m: number, n: number, iterations: number = 0): number {
    const M: number = m;
    const N: number = n;

    // Step E1
    let r: number = m % n;
    iterations++;

    // Step E2
    while (r !== 0) {
        // Step E3
        m = n;
        n = r;

        r = m % n;
        iterations++;
    }

    printAnswer('findGCDLoop', M, N, n, iterations);

    return n;
}

function findGCDRecursion(
    m: number,
    n: number,
    iterations: number = 0,
    M: number = m,
    N: number = n
): number {
    // Step E1
    let r: number = m % n;
    iterations++;

    // Step E2
    if (r === 0) {
        printAnswer('findGCDRecursion', M, N, n, iterations);
        return n;
    }

    // Step E3
    findGCDRecursion(n, r, iterations, M, N);
}

/*
Page 4

It is clear that if m < n originally, the quotient in step E1 
will always be zero and the algorithm will always proceed to 
interchange m and n in this rather cumbersome fashion.
We could insert a new step at the beginning:

E0. [Ensure m ≥ n.] If m < n, exchange m ↔ n.

*/

function findGCDLoopStep0(
    m: number,
    n: number,
    iterations: number = 0
): number {
    const M: number = m;
    const N: number = n;

    // Step E0
    if (m < n) {
        [m, n] = [n, m];
    }

    // Step E1
    let r: number = m % n;
    iterations++;

    // Step E2
    while (r !== 0) {
        // Step E3
        m = n;
        n = r;

        r = m % n;
        iterations++;
    }

    printAnswer('findGCDLoopStep0', M, N, n, iterations);
    return n;
}

function findGCDRecursionStep0(
    m: number,
    n: number,
    iterations: number = 0,
    M: number = m,
    N: number = n
): number {
    // Step E0
    if (m < n) {
        [m, n] = [n, m];
    }

    // Step E1
    let r: number = m % n;
    iterations++;

    // Step E2
    if (r === 0) {
        printAnswer('findGCDRecursionStep0', M, N, n, iterations);
        return n;
    }

    // Step E3
    findGCDRecursionStep0(n, r, iterations, M, N);
}

// Testing the algorithm
let m = 119;
let n = 544;

findGCDLoop(m, n);
findGCDRecursion(m, n);
findGCDLoopStep0(m, n);
findGCDRecursionStep0(m, n);

m = 398;
n = 43390;

findGCDLoop(m, n);
findGCDRecursion(m, n);
findGCDLoopStep0(m, n);
findGCDRecursionStep0(m, n);

m = 10000000;
n = 1000;

findGCDLoop(m, n);
findGCDRecursion(m, n);
findGCDLoopStep0(m, n);
findGCDRecursionStep0(m, n);

m = 15;
n = 250;

findGCDLoop(m, n);
findGCDRecursion(m, n);
findGCDLoopStep0(m, n);
findGCDRecursionStep0(m, n);

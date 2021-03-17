/*
QUESTION
3. [20] Change Algorithm E (for the sake of efficiency) so that all trivial replacement operations such as “m ← n” are avoided. 
Write this new algorithm in the style of Algorithm E, and call it Algorithm F.

ANSWER
F1. [Remainder m/n.] Divide m by n and let m be the remainder.
F2. [Is it zero?] If m = 0, the algorithm terminates with answer n.
F3. [Remainder n/m.] Divide n by m and let n be the remainder.
F4. [Is it zero?] If n = 0, the algorithm terminates with answer m; otherwise go
back to step F1. █

*/

export {}; // to prevent "Duplicate function implementation" error

function printAnswer(
    functionName: string,
    M: number,
    N: number,
    gcd: number,
    iterations: number
) {
    console.log(
        `${functionName}() \nGCD between ${M} and ${N} = ${gcd}, resolved with ${iterations} iterations\n`
    );
}

function findGCDLoop(m: number, n: number, iterations: number = 0): number {
    const M: number = m;
    const N: number = n;

    // Step F1
    m = m % n;
    iterations++;

    // Step F2
    while (m !== 0) {
        // Step F3
        n = n % m;

        // Step F4
        if (n === 0) {
            printAnswer('findGCDLoop', M, N, m, iterations);
            return m;
        }

        // Step F1
        m = m % n;
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
    // Step F1
    m = m % n;
    iterations++;

    // Step F2
    if (m === 0) {
        printAnswer('findGCDRecursion', M, N, n, iterations);
        return n;
    }

    // Step F3
    n = n % m;

    // Step F4
    if (n === 0) {
        printAnswer('findGCDRecursion', M, N, m, iterations);
        return m;
    }

    return findGCDRecursion(m, n, iterations, M, N);
}

// Testing the algorithm
let m = 119;
let n = 544;

findGCDLoop(m, n);
findGCDRecursion(m, n);

m = 398;
n = 43390;

findGCDLoop(m, n);
findGCDRecursion(m, n);

m = 10000000;
n = 1000;

findGCDLoop(m, n);
findGCDRecursion(m, n);

m = 15;
n = 250;

findGCDLoop(m, n);
findGCDRecursion(m, n);

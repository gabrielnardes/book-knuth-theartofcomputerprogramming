/*

QUESTION
6. [20] What is T5, the average number of times step E1 is performed when n = 5?

ANSWER
Trying Algorithm E with n = 5 and m = 1, 2, 3, 4, 5, we find that step E1 is
executed 2, 3, 4, 3, 1 times, respectively. So the average is 2.6 = T5

*/

export {}; // to prevent "Duplicate function implementation" error

function printAnswer(M: number, N: number, gcd: number, iterations: number) {
    console.log(
        `GCD between ${M} and ${N} = ${gcd}, resolved with ${iterations} iterations`
    );
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
    console.log(`${m}   ${n}   ${r}`);

    // Step E2
    if (r === 0) {
        printAnswer(M, N, n, iterations);
        return iterations;
    }

    // Step E3
    return findGCDRecursion(n, r, iterations, M, N);
}

function findTs(m: number, n: number) {
    let totalIterations: number = 0;
    for (let i: number = 1; i <= m; i++) {
        console.log(`\nm   n   r`);
        totalIterations += findGCDRecursion(i, n);
    }

    let Ts: number = totalIterations / n;
    console.log(Ts);
}

findTs(5, 5);

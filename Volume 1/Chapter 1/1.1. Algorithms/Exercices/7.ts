/*

QUESTION
-> 7. [HM21] Let Um be the average number of times that step E1 is executed in
Algorithm E, if m is known and n is allowed to range over all positive integers. Show
that Um is well defined. Is Um in any way related to Tm?

ANSWER
In all but a finite number of cases, n > m. And when n > m, the first iteration
of Algorithm E merely exchanges these numbers; so Um = Tm + 1. For example, try
m = 5 and n = 1, 2, . . . : The average of 1, 2, 3, 2, 1, 3, 4, 5, 4, 2, 3, 4, 5, 4, 2, . . . is 3.6

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

function findUm(m: number, n: number) {
    let totalIterations: number = 0;
    for (let i: number = 1; i <= n; i++) {
        console.log(`\nm   n   r`);
        totalIterations += findGCDRecursion(m, i);
    }

    let Um: number = totalIterations / n;
    console.log(Um);
}

findUm(5, 15);

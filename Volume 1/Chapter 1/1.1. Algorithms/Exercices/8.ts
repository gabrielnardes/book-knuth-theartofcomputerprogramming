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

function* outputGenerator() {
    let ret1 = yield 1
    console.log(`got ret1: ${ret1}`)
    let ret2 = yield 2
    console.log(`got ret2: ${ret2}`)
}

let iterator = outputGenerator()

let r1 = iterator.next(1).value
console.log(r1);
r1 = iterator.next(2) // got ret1: 2
console.log(r1);
r1 = iterator.next(3)// got ret2: 3
console.log(r1);


/*
//only work in browser
fetch("https://jsonplaceholder.typicode.com/posts/1").then(x => console.log(x));
console.log("1");
fetch("https://jsonplaceholder.typicode.com/posts/2").then(x => console.log(x));
console.log("2");

*/


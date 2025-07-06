/* 
Implement the take() function that converts a sequence of iterated values into a sequence of length n.
For example:

Тест	Result
const arr = ['a', 'b', 'c', 'd'];
for (const x of take(2, arr)) {
    console.log(x);
}
// a
// b
*/




function* take(n, iterable) {
    let count = 0;
    for (const item of iterable) {
        if (count < n) {
            yield item;
            count++;
        } else {
            break;
        }
    }
}

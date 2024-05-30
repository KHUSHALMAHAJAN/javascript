let a = [1, 2, 3, 4, 5]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}
for (const val of a) {
    console.log(val)
}
let newarr = a.map((ele, index, array) => {
    return ele * 2
}
)
console.log(newarr)
const greaterthanthree = (e) => {
    if (e > 3)
        return true;
    return false;
}
console.log(a.filter(greaterthanthree))
const red = (a, b) => {
    return a + b
}
console.log(a.reduce(red))

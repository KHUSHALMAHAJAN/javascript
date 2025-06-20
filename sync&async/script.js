// console.log("hii")
// setTimeout(function(){
//     console.log("hii2")
// },3000)
// console.log("hii3")


// var ans = new Promise(function(res,rej){
//     if(false)
//         return res("pass data in true")
//     else
//         return rej("pass data in false")
// })
// ans
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(function(data){
//         console.log(data)
//     })

// var ans = new Promise(function(res,rej){
//         return res("data return")
// })
// var pr2 = ans
//     .then(function(data){
//         console.log(data)
//         return new Promise(function(res,rej){
//             return res("data return 2")
//         })
//     })
// pr2.then(function(data){
//     console.log(data)
// })


// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json()
//     })
//     .then(function(raw){
//         console.log(raw)
//     })
// }
// abcd()

async function abcd(){
    var raw = await fetch(`https://randomuser.me/api/`)
    var data = await(raw.json())
    console.log(data)
    console.log("home")
    console.log("home")
    console.log("home")
    console.log("home")
    console.log("home")
    console.log("home")
    console.log("home")
}
abcd()
console.log("home56")
// function abcd(a){
//     a()
// }
// abcd(function(){
//     console.log("a run")
// })

// function abcd(){
//     return function(){
//         console.log("a run")
//     }
// }
// var ab = abcd()
// console.log(ab())


// function abcd(color){
//     this.wight = 20
//     this.height = 40
//     this.color = color
// }
// var val1 = new abcd()
// var val2 = new abcd()
// var val3 = new abcd("red")

// var a = function(){
//     console.log("a run")
// }
// console.log(a())

// function abcd(val){
//     console.log(val)
// }
// abcd(a())

// var ans = (function(){
//     var privateval = 12
//     return {
//         getter:function(){
//             console.log(privateval)
//         },
//         setter:function(val){
//             privateval = val
//         }
//     }
// })()

// var obj = {
//     name : "kunal"
// }

// var parent = {
//     walk : true,
//     fly : false
// }
// var child = {
//     playchess : true,
//     coding : true
// }
// child.__proto__ = parent;

// console.log(this)

// function abcd(){
//     console.log(this)
// }
// abcd()

// var obj = {
//     name : "kunal",
//     val : function(){
//         console.log(this)
//     }
// }
// obj.val()
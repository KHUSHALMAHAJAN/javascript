const point = document.getElementById("point")
// point.style.top = event.
// point.style.left = "150px"
// const rect = point.getBoundingClientRect()
// const position  = {
//     top : rect.top,
//     left : rect.left,
//     right : rect.right,
//     bottom : rect.bottom 
// }
// console.log(position)
// document.addEventListener("mousemove",(e) => {
//     console.log(e.pageX)
//     console.log(e.pageY)
// })
// document.point.style.top = ""+46+"px"
// document.point.style.left = ""+46+"px"

// point.style.position = 'absolute';
// point.style.top = '15px';
// point.style.left = '150px';

document.addEventListener("mousemove",(e) => {
    point.style.position = "absolute"
    point.style.top = e.pageY - 25 + "px"
    point.style.left = e.pageX - 25 + "px" 
    // console.log(e.pageX)
    // console.log(e.pageY)
    // console.log(e.pageX + "px") 
    // console.log(e.pageY + "px") 
})
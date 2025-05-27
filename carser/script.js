const point = document.getElementById("point")
const logo = document.getElementById("logo")
const firstcontener = document.getElementById("firstcontener")
const discription = document.getElementById("discription")
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


document.addEventListener("mousemove", (e) => {
    setTimeout(function () {
        point.style.position = "absolute"
        point.style.top = e.pageY - 30 + "px"
        point.style.left = e.pageX - 30 + "px"
    }, 150)
})
firstcontener.addEventListener("mouseover", function () {
    description.style.display = "block";
});
firstcontener.addEventListener("mouseleave", function () {
    description.style.display = "none";
})
const like = document.querySelector("#like")
const img = document.querySelector("img")
const lightlike = document.querySelector("#lightlike")
var flag = true
img.addEventListener("dblclick", function () {
    if (flag == true) {
        lightlike.style.transform = 'translate(-50%,-50%)scale(1)'
        setTimeout(function () {
            lightlike.style.transform = 'translate(-50%,-50%)scale(0)'
        }, 2000)
        like.style.color = "red"
        flag = false
    }
})
like.addEventListener("click", function () {
    if (flag == true) {
        like.style.color = "red"
        lightlike.style.transform = 'translate(-50%,-50%)scale(1)'
        setTimeout(function () {
            lightlike.style.transform = 'translate(-50%,-50%)scale(0)'
        }, 2000)
        like.style.color = "red"
        flag = false
    }
    else {
        like.style.color = "rgba(236, 225, 225, 0.986)"
        flag = true
    }
})
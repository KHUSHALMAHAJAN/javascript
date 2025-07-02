arr = [{dp : "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    story : "https://images.pexels.com/photos/887349/pexels-photo-887349.jpeg"
},
{
    dp : "https://images.pexels.com/photos/206551/pexels-photo-206551.jpeg",
    story : "https://images.pexels.com/photos/6788862/pexels-photo-6788862.jpeg"
},
{
    dp : "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg",
    story : "https://images.pexels.com/photos/348520/pexels-photo-348520.jpeg"
},
{
    dp : "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg",
    story : "https://images.pexels.com/photos/627979/pexels-photo-627979.jpeg"
},
{
    dp : "https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg",
    story : "https://images.pexels.com/photos/236235/pexels-photo-236235.jpeg"
},
{
    dp : "https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg",
    story : "https://images.pexels.com/photos/704752/pexels-photo-704752.jpeg"
}
]
var conatiner = ""
arr.forEach(function(val,ind){
    conatiner += `<div class ="story"><img id = "${ind}" src="${val.dp}" alt=""></div>`
})
// console.log(conatiner)
const storiya = document.querySelector("#storiya")
storiya.innerHTML = conatiner 


// storiya.addEventListener("click",function(dets){
//     document.querySelector("#full-size").style.display = "block"
//     document.querySelector("#full-size").style.backgroundImage = `url(${arr[dets.target.id].story})`
// })

const story = document.querySelectorAll(".story")
story.forEach(function(val){
    val.addEventListener("click",function(dets){
        document.querySelector("#full-size").style.display = "block"
        document.querySelector("#full-size").style.backgroundImage = `url(${arr[dets.target.id].story})`
        setTimeout(function(){
            document.querySelector("#full-size").style.display = "none"
        },3000)
    })
})

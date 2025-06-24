const follow = document.querySelector("#follow")
const massage = document.querySelector("#message")
flag  = true
follow.addEventListener("click",function(){
    if(flag == true){
        follow.innerHTML = "Unfollowing"
        follow.style.backgroundColor = "white"
        follow.style.color = "black"
        massage.style.display = "block"
        flag = false
    }
    else{
        follow.innerHTML = "Follow"
        follow.style.backgroundColor = "blue"
        follow.style.color = "white"
        massage.style.display = "none"
        flag = true
    }
})
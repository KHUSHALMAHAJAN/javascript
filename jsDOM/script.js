var bulb = document.querySelector("div")
var button = document.querySelector("button")
var flag = true
button.addEventListener("click",function(){
    if(flag == true){
        bulb.style.backgroundColor = "yellow"
        this.innerHTML = "OFF"
        flag = false
    }
    else{
        bulb.style.backgroundColor = "white"
        this.innerHTML = "ON"
        flag = true
    }
})
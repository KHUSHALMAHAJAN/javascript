const btn = document.querySelector("#btn");
const hid = document.querySelector("#hid");
const photo = document.querySelector("#photo");
let url;
btn.addEventListener("click", () => {
  hid.click();
});
hid.addEventListener("change", function(dets) {
  var nameimg = dets.target?.files[0]?.name;
  if (nameimg) {
    btn.textContent = `${nameimg}`;
    const file = this.files[0];
    url = URL.createObjectURL(file);
    // console.log(url);
    // img()
  }
});

const form = document.querySelector("form")
const input = document.querySelectorAll("input")
const maincard = document.querySelector("#maincard")
form.addEventListener("submit",function(even){
    even.preventDefault()
    input.forEach(function(val){
        console.log(val.value)
    })
    let card = ` <div id="card">
                <div id="img">
                    <img src="${url}"
                        alt="">
                </div>
                <div id="name">My Name is ${input[0].value}</div>
                <div id="eduction">My education is ${input[1].value}</div>
                <div id="email">My education is ${input[2].val}</div>
            </div>`
    maincard.innerHTML = card
})

// function img(){
//     const img = document.createElement("img")
//     img.src = `${url}`
//     img.alt = "place holder image"
//     photo.appendChild(img)
//     console.log(photo)
// }

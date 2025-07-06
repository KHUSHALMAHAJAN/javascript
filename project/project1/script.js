arr = [
  {
    name: "sunset",
    img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg",
  },
  {
    name: "sun",
    img: "https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg",
  },
  {
    name: "light",
    img: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg",
  },
  {
    name: "rose",
    img: "https://images.pexels.com/photos/1122639/pexels-photo-1122639.jpeg",
  },
  {
    name: "girl",
    img: "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg",
  },
  {
    name: "boy",
    img: "https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg",
  },
  {
    name: "friend",
    img: "https://images.pexels.com/photos/1974927/pexels-photo-1974927.jpeg",
  },
  {
    name: "coding",
    img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  },
];
container = "";
arr.forEach(function (val) {
  container += `<img src="${val.img}" alt=""></img>`;
});
document.querySelector("#row-image").innerHTML = container;
name_container = "";
arr.forEach(function (val) {
  name_container += `<p>${val.name}</p>`;
});
const manu = document.querySelector("#manu");
manu.innerHTML = name_container;
name_one = document.querySelectorAll("p");
console.log(name_one);

const input = document.querySelector("input");
input.addEventListener("focus", function () {
  document.querySelector("#row-image").style.opacity = "0.1";
  manu.style.display = "block";
});
input.addEventListener("blur", function () {
  document.querySelector("#row-image").style.opacity = "1";
  manu.style.display = "none";
});
input.addEventListener("input", function () {
  const fillterarr = arr.filter((obj) =>
    obj.name.toLowerCase().startsWith(input.value)
  );
  // console.log(fillterarr)
  var pic = ""
  fillterarr.forEach(function(val){
    pic += `<img src="${val.img}" alt=""></img>`
    console.log(pic)
  })
  var cont = "";
  fillterarr.forEach(function (val) {
    cont += `<p>${val.name}</p>`;
    // console.log(val.name)
  });
  manu.style.display = "block";
  manu.innerHTML = cont;
  document.querySelector("#row-image").innerHTML = pic;

  // console.log(input.value)
});
// name_one.forEach(function (val) {
//   val.addEventListener("click", function () {
//     console.log("val");
//   });
// });

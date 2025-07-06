arr = [
  {
    index: 0,
    name: "car",
    img: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg",
    price: "5000000",
  },
  {
    index: 1,
    name: "house",
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    price: "10000000",
  },
  {
    index: 2,
    name: "watch",
    img: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg",
    price: "10000",
  },
  {
    index: 3,
    name: "bike",
    img: "https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg",
    price: "500000",
  },
  {
    index: 4,
    name: "shirt",
    img: "https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg",
    price: "10000",
  },
  {
    index: 5,
    name: "laptop",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    price: "200000",
  },
];

arr_addcard = [];

var containercardimg = "";
arr.forEach(function (val, ind) {
  console.log("arr");
  containercardimg += `<div class="card">
                <h1>${val.name}</h1>
                <img src="${val.img}" alt="">
                <div id="icon-bor">
                    <p>&#8377; ${val.price}</p>
                    <div class="icon" id= "${ind}"><i class="ri-add-line" id= "${ind}"></i></div>
                </div>
            </div>`;
});

const containeraddcard = document.querySelector("#containeraddcard");

const containercard = document.querySelector("#containercard");
containercard.innerHTML = containercardimg;
const icon = document.querySelectorAll(".icon");
var containercardaddimg = "";

icon.forEach(function (val) {
  val.addEventListener("click", function (dots) {
    var falg = confirm("Enter your card");
    if (falg == true) {
      // arr_addcard = [];
      console.log(dots.target.id);
      arr_addcard.push(arr[dots.target.id]);
      console.log("click");
      console.log(arr_addcard);

      // containercardaddimg = ""
      containeraddcard.innerHTML = ""
      arr_addcard.forEach(function (val) {
        console.log("arrcard");
        containercardaddimg += `<div class="card">
          <h1>${val.name}</h1>
          <img src="${val.img}" alt="">
          <div id="icon-bor">
          <p>&#8377; ${val.price}</p>
          <div class="icon" id= "${val.index}"><i class="ri-add-line" id= "${val.index}"></i></div>
          </div>
           </div>`;
      });
      containeraddcard.innerHTML = containercardaddimg;
    }
  });
});

const close_btn = document.querySelector("#close-btn");
const menu_btn = document.querySelector("#menu-btn");

// arr_addcard.forEach(function (val) {
//   console.log("arrcard");
//   containercardaddimg += `<div class="card">
//   <h1>${val.name}</h1>
//   <img src="${val.img}" alt="">
//   <div id="icon-bor">
//   <p>&#8377; ${val.price}</p>
//   <div class="icon" id= "${val.index}"><i class="ri-add-line" id= "${val.index}"></i></div>
//   </div>
//   </div>`;
// });

menu_btn.addEventListener("click", function () {
  // containeraddcard.style.display = "block"
  containeraddcard.style.position = "absolust";
  containeraddcard.style.top = 0;
  containeraddcard.style.left = 0;
  containercard.style.opacity = 0;
  containeraddcard.style.opacity = 1;
  close_btn.style.display = "block";
  menu_btn.style.display = "none";
  console.log("card");
});
close_btn.addEventListener("click", function () {
  menu_btn.style.display = "block";
  close_btn.style.display = "none";
  // container.innerHTML = containercard;
  containercard.style.position = "absolust";
  containercard.style.top = 0;
  containercard.style.left = 0;
  containeraddcard.style.opacity = 0;
  containercard.style.opacity = 1;
  console.log("normal");
});

var flag = false;

radomnum = 4;
while (radomnum > 3) {
  radomnum = Math.floor(Math.random() * 10);
  if (radomnum == 0) {
    radomnum = 9;
  }
}
if (radomnum == 1) {
  document.querySelector("#card1").style.backgroundImage =
    "url(https://imgs.search.brave.com/ypyP7uJRwlmwHOq0EpJZafV6AJyJWK_6fITUT9MVx-M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NjQwLzkwNy9zbWFs/bC9jYXQtdmlicmFu/dC1jdXRlLWxvdmVh/YmxlLWJlYXV0aWZ1/bC1nb3JnZW91cy1w/aG90by5qcGc)";
} else if (radomnum == 2) {
  document.querySelector("#card2").style.backgroundImage =
    "url(https://imgs.search.brave.com/ypyP7uJRwlmwHOq0EpJZafV6AJyJWK_6fITUT9MVx-M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NjQwLzkwNy9zbWFs/bC9jYXQtdmlicmFu/dC1jdXRlLWxvdmVh/YmxlLWJlYXV0aWZ1/bC1nb3JnZW91cy1w/aG90by5qcGc)";
} else {
  document.querySelector("#card3").style.backgroundImage =
    "url(https://imgs.search.brave.com/ypyP7uJRwlmwHOq0EpJZafV6AJyJWK_6fITUT9MVx-M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NjQwLzkwNy9zbWFs/bC9jYXQtdmlicmFu/dC1jdXRlLWxvdmVh/YmxlLWJlYXV0aWZ1/bC1nb3JnZW91cy1w/aG90by5qcGc)";
}
// console.log(radomnum)
const card = document.querySelectorAll(".card");
count = 0;
flag = 0;
card.forEach(function (val) {
  val.addEventListener("click", function (dots) {
    count++;
    // console.log(dots.target.id);
    if (count < 3) {
      if (dots.target.id == "card-cover1") {
        document.querySelector("#card-cover1").style.transform =
          "rotate(-90deg)";
        flag = 1;
      } else if (dots.target.id == "card-cover2") {
        document.querySelector("#card-cover2").style.transform =
          "rotate(-90deg)";
        flag = 2;
      } else {
        document.querySelector("#card-cover3").style.transform =
          "rotate(-90deg)";
        flag = 3;
      }
      if (flag == radomnum) {
        document.querySelector("#result").innerHTML = "You Win";
      } else if (count == 1) {
        document.querySelector("#result").innerHTML = "you are  lost 1 chance";
      } else if(count == 2){
        document.querySelector("#result").innerHTML = "You loss this game"
      }
    } else {
      document.querySelector("#result").innerHTML = "restart your game";
    }
  });
});

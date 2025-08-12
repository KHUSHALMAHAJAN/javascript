var arr = [
  {
    songname: "Arjun Valley",
    songimg:
      "https://imgs.search.brave.com/VVGIg8OhsAWK8f2etXhfHrd3Ef6qcSamwVB4uBCDtXI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWMu/YnN0YXJzdGF0aWMu/Y29tL3VnYy82YmNi/NTNiYzdiMzAyNDUx/MTg3NDdlMDE0ODQy/YWI3Ni5qcGdAMzIw/d18xODBoXzFlXzFj/XzkwcQ",
    song: "Arjun-Velly.mp3",
    songduration: "3:00",
  },
  {
    songname: "Hoodlife",
    songimg:
      "https://imgs.search.brave.com/6HrEuxHoK4gl4uPUzoxKvIcvd_g1NIRPOhYcECqWsQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZW5k/dWphdHQuY29tLnNl/L3VwbG9hZHMvYWxi/dW0vaG9vZC1saWZl/LXNhbWJhdGEud2Vi/cA",
    song: "hoodlife.mp3",
    songduration: "3:18",
  },
  {
    songname: "Mahan",
    songimg:
      "https://imgs.search.brave.com/9axzoIbl8SrNmLQljQji1p0QxJAoc9a46fyJ8_8Bk48/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZW5k/dWphdHQuY29tLnNl/L3VwbG9hZHMvYWxi/dW0vbWFoYWFuLXJv/Y2tzdW4ud2VicA",
    song: "mahan.mp3",
    songduration: "3:54",
  },
  {
    songname: "Nako Raste Changle",
    songimg:
      "https://imgs.search.brave.com/0nzxijOmsh8W_DoD4GEYvVundwhR05dx0049-GFzUnM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLVBaZVpu/dnVaNjl0MERWSUwt/S2hVejB3LXQ1MDB4/NTAwLmpwZw",
    song: "nakorastechangle.mp3",
    songduration: "4:18",
  },
];
var audio = new Audio();
var selectsong = 0;
var flag = true;
conatianer = "";
var play = document.querySelector("#play");
arr.forEach(function (val, ind) {
  conatianer += `<div class="song" id="${ind}">
                    <img id="${ind}" src="${val.songimg}"
                        alt="">
                    <div class="temp" id="${ind}">
                        <h2 id="${ind}">${val.songname}</h2>
                        <h4 id="${ind}">${val.songduration}</h4>
                    </div>
                </div>`;
});
var all_song = document.querySelector("#all-song");
all_song.innerHTML = conatianer;
song = document.querySelectorAll(".song");
left = document.querySelector("#left");
song.forEach(function (val) {
  val.addEventListener("click", function (dots) {
    selectsong = parseInt(dots.target.id);
    audio.src = arr[selectsong].song;
    audio.play();
    flag = false;
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    left.style.backgroundImage = `url(${arr[selectsong].songimg})`;
    if (selectsong < 0) {
      console.log("less 2");
      console.log(selectsong);
      backword.style.opacity = 0.3;
    } else {
        console.log("back1")
      backword.style.opacity = 1;
    }
    if (selectsong > 2) {
      console.log(selectsong);
      console.log("more");
      forword.style.opacity = 0.3;
    } else {
      console.log(selectsong);
      console.log("normal");
      forword.style.opacity = 1;
    }
  });
});

// var play = document.querySelector("#play");
var backword = document.querySelector("#backword");
var forword = document.querySelector("#forword");

backword.addEventListener("click", function () {
  if (selectsong > 0) {
    selectsong--;
    audio.src = arr[selectsong].song;
    audio.play();
    flag = false;
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    left.style.backgroundImage = `url(${arr[selectsong].songimg})`;
  } else {
    console.log("back")
    backword.style.opacity = 0.3;
  }
});

forword.addEventListener("click", function () {
  if (selectsong < 3) {
    console.log(selectsong)
    selectsong++;
    audio.src = arr[selectsong].song;
    audio.play();
    flag = false;
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    left.style.backgroundImage = `url(${arr[selectsong].songimg})`;
  }else {
    forword.style.opacity = 0.3;
  }
});

play.addEventListener("click", function () {
  if (flag == false) {
    console.log("audio");
    audio.pause();
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    flag = true;
  } else {
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    console.log("pause");
    audio.src = arr[selectsong].song;
    audio.play();
    flag = false;
  }
  if (selectsong > 0) {
    console.log("less");
    backword.style.opacity = 0.3;
  } else {
    backword.style.opacity = 1;
  }
});
// if(selectsong == 0){
//     backword.style.opacity = .3
// }
// else{
//     backword.style.opacity = 1
// }

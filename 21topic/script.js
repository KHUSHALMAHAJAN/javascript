// function createCounter() {
//   let count = 0;

//   console.log("out",count)
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = createCounter();
// console.log("er")
// counter();
// counter();
// counter();
// counter();
// counter();
// // var count = 10

// console.log("hello world");
// function bank() {
//   var balance = 0;
//   return {
//     deposit: function () {
//       var value = prompt("enter a amount will you desposit");
//       balance += value;
//       console.log("your money add successfuly");
//     },
//     withdrow: function () {
//       var value = prompt("enter a amount will you withdrow");
//       if (balance >= value) {
//         balance -= value;
//         console.log("get your cash");
//       } else {
//         console.log("you balance does not enf");
//       }
//     },
//     getBalance: function () {
//       console.log(balance);
//     },
//   };
// }
// var bankbalance = bank();
// var falg = 0;
// falg = parseInt(prompt("get number"))
// while (falg != 0) {
//   switch (falg) {
//     case 1:
//       bankbalance.deposit();
//       break;
//     case 2:
//       bankbalance.withdrow();
//       break;
//     case 3:
//       bankbalance.getBalance();
//   }
//   falg = parseInt(prompt("get number"))
// }
// for(i = 1;i<=10;i++){
//   console.log("i love you")
// }

// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3");
//     }, 1000);
//   }, 1000);
// }, 1000);

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(1000)
//   .then(() => {
//     console.log("1");
//     return delay(1000);
//   })
//   .then(() => {
//     console.log("2");
//     return delay(1000);
//   })
//   .then(() => {
//     console.log("3");
//   });

// var ans = new Promise(function(res,rej){
//   rej("hii mc gawati")
// })
// ans
// .then(function(data){
//   console.log(data)
// })
// .catch(function(data){
//   console.log(data)
// })

// var pro2
// function func(ms){
//   return new Promise(function(res,rej){
//     setTimeout(function(){
//       rej()
//     },ms)
//   } )
// }
// var pro1 = func(3000)
// console.log(pro1)
// pro1
// .then(function(){
//   console.log("2")
// })
// .catch(function(){
//   console.log("ret")
//   return func(5000)
// })
// func()
// .catch(function(){
//   console.log("2 rej")
// })

// .catch(function(){
//   console.log("1")
//   delay(5000)
// })
// .then(function(){
//   console.log("2 then")
// })
// .catch(function(){
//   console.log("2")
// })

// nums = [0,0,1]
// j = nums.length
// console.log(nums.length)
// count = 0
// for (let i = 0; i < j; i++) {
//   console.log("i",i)
//   console.log("outer",nums[i])
//   if(nums[i] == 0){
//     console.log("nums",nums[i])
//     nums.splice(i,1)
//     count++
//   }
// }
// console.log("ans",nums)
// for(var i = 1;i<= count;i++){
//   console.log(i)
//   nums.push(0)
// }
// console.log(nums)

// nums = [4,2,1,3,3];
// k = 2;
// sum = 0;
// for (i = 0; i < k; i++) {
//   sum += nums[i];
// }
// console.log("sum",sum)
// maxsum = sum;
// j = 0;
// for (i = k; i < nums.length; i++) {
//   console.log("i",i)
//   console.log("j",j)
//   sum = sum - nums[i-k] + nums[i];
//   if (sum > maxsum) {
//     console.log("if in maxsum",maxsum)
//     console.log("if in sum",sum)
//     maxsum = sum;
//     console.log("after if maxsum",maxsum)
//   }
//   j++;
// }
// console.log("maxsum",maxsum)
// console.log(maxsum / k);

// k = 1
// nums = [0,4,0,3,2]

// if (k == 1) {
//   sum = nums[0];
//   for (var i = 1; i < nums.length; i++) {
//     console.log("i",i)
//     if (nums[i] > sum) {
//       console.log("nums[i]",nums[i])
//       console.log("num[i-1]",nums[i-1])
//       sum = nums[i];
//     }
//     console.log("sum",sum)
//   }
//   console.log(sum/k)
// }

// nums = [0]
// num = nums[0];
// count = [1];
// // flag = false;
// // newcount = 0;
// j = 0;
// for (var i = 1; i < nums.length; i++) {
//   console.log("i",i)
//   if (num == nums[i]) {
//     console.log("nums[i]",nums[i])
//     count[j]++;
//   } else {
//     num = nums[i]
//     console.log("num",num)
//     count.push(1);
//     console.log('count',count)
//     j++;
//     console.log("gdh")
//   }
// }
// console.log(count)
// console.log(Math.max(...count));

// var data

// async function abcd(){
//   var raw = await fetch("https://randomuser.me/api/")
//   console.log(raw)
//   var data = await raw.json()
//   console.log(data)
//   console.log(raw)
//   console.log("hello world 1")
//   console.log("hello world 2")
//   console.log("hello world 3")
//   console.log("hello world 4")
// }
// abcd()
// console.log("hello world")
// console.log(data)

// const btn = document.querySelector("#btn")
// const press_btn = document.querySelector("#press_btn")
// const debounce = document.querySelector("#debounce")

// press = 0
// de = 0

// const mydebounce = function(cb,d){
//   let timer
//   return function(...args){
//     if(timer) clearTimeout(timer)

//       timer = setTimeout(function(){
//         cb(...args)
//       },d)
//   }
// }

// const debouncecount = mydebounce(function(){
//   // de += 1
//   debounce.innerHTML = ++de
// },5000)

// btn.addEventListener("click",function(){
//   press_btn.innerHTML = ++press
//   debouncecount()
// })

// const input = document.querySelector("input")

// function mydebounce(fn,d){
//   let timer
//   return function(...args){
//     if(timer) clearTimeout(timer)
//     timer = setTimeout(function(){
//       fn(...args)
//     },d)
//   }
// }

// const myfunction = function(val){
//   var str = val.target.value
//   console.log("searching value ",str)
// }
// input.addEventListener("input",mydebounce(myfunction,3000))

// nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
// if (nums[0] == 0) {
//   nums.shift();
// }
// var count = [1];
// var j = 0;
// for (var i = 1; i < nums.length; i++) {
//   if (nums[i] == 1) {
//     count[j]++;
//   } else {
//     if (j == 0) {
//       j++;
//       count.push(0);
//     } else if (j == 1) {
//       count[j] = count[j - 1] + count[j];
//       j++;
//       count.push(0);
//     } else {
//       count[j] = count[j - 1] - count[j - 2] + count[j];
//       j++;
//       count.push(0);
//     }
//   }
// }
// count.shift();
// console.log(Math.max(...count));

// let minLen = Infinity
// console.log(minLen-1000000)

// let s = "pwwkew";
// if (s[0] == " ") console.log("0");
// if (s.length == 1) console.log("1");

// let sb = "";
// let temp = 0;

// for (let i = 0; i < s.length; i++) {
//     console.log("i",s[i])
//   let ch = s[i];
//   let index = sb.indexOf(ch);
//   console.log("index", index);
//   if (index === -1) {
//     sb += ch;
//     console.log("if",sb)
//   } else {
//     // Update max length if needed
//     if (temp < sb.length) {
//       temp = sb.length;
//       console.log("else if ",temp)
//       console.log("esle if ",sb)
//     }
//     // Remove up to and including duplicate character
//     sb = sb.substring(index + 1) + ch;
//     console.log("sb",sb)
//   }
// }

// if (temp < sb.length) {
//   temp = sb.length;
// }

// console.log(temp);

// arr = [1,3,4,90]
// fruits = [3,3,3,1,2,1,1,2,3,3,4];
// var count = [1];
// var l = -1;
// for (var i = 0; i < fruits.length; i++) {
//     console.log("i",fruits[i])
//   var k = fruits[i];
//   l++;
//   count[l] = 1;
//   for (var j = i + 1; j < fruits.length; j++) {
//     if (k == fruits[j]) {
//       count[l]++;
//       fruits.splice(j,1)
//       console.log("bc",fruits)
//       j--
//     //   console.log(l)
//     }
//     console.log("in for",count)
//   }
// }
// console.log("mc",count)
// // console.log(Math.max(arr))
// b1 = Math.max(...count);
// console.log("b1",b1)
// for (var i = 0; i < count.length; i++) {
//   if (b1 == count[i]) {
//     count.splice(i, 1);
//   }
// }
// console.log(count)
// b2 = Math.max(...count);
// console.log(b1 + b2)

// const btn = document.querySelector("button")

// btn.addEventListener("click",function(){
//   console.log("hello")
// })

// function trolling(fn,limit){
//   var flag = true
//   return function(){
//     if(flag){
//       fn()
//       flag = false
//       setTimeout(() => {
//         flag = true
//       }, limit);
//     }
//   }
// }

// const func = function(){
//   console.log("khushal")
// }

// btn.addEventListener("click",trolling(func,5000))

// nums = [-2,1,-3,4,-1,2,1,-5,4]
// sum = nums[0];
// maxsum = nums[0];
// for (i = 1; i < nums.length; i++) {
//   sum = sum + nums[i];
//   console.log("sum",sum)
//   if (sum < nums[i]) {
//     sum = nums[i];
//     console.log("sum if",sum)
//   }
//   if (maxsum < sum) {
//     maxsum = sum;
//     console.log("maxsum".maxsum)
//   }
// }
// console.log(maxsum);

// nums = [3, 4, 5, 1, 2];
// num = nums[0];
// for (i = 1; i < nums.length; i++) {
//   if (num < nums[i]) {
//     num = nums[i];
//   }
//   else {
//     console.log("i",i)
//     break
//   }
// }
// console.log(nums[i])

// taskarr = [];
// str = "";
// var dotask
// const list = document.querySelector("#list");
// const btn = document.querySelector("#addBtn");
// const input = document.querySelector("input");
// btn.addEventListener("click", function () {
//   dotask = input.value;
// });
// taskarr.push(dotask);
// console.log(taskarr);
// localStorage.setItem("task", JSON.stringify(taskarr));
// gettask = JSON.parse(localStorage.getItem("task"));
// console.log(gettask);
// gettask.forEach((val, ind) => {
//   str += `<div class="task">${val}
//                 <div id="icon">
//                     <i id="${ind}" class="ri-verified-badge-line correct"></i>
//                     <i id="${ind}" class="ri-close-circle-line cancel"></i>
//                 </div>
//             </div>`;
//   console.log(ind);
// });
// console.log(str);
// list.innerHTML = str;
// str = "";
// input.value = "";

// const  = document.querySelector(".task")
// list.addEventListener("click", function (val) {
//   console.log(val.target.class);
// });

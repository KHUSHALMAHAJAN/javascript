function sum(num1, num2) {
    let ans;
    ans = num1 + num2;
    console.log("sum is " + ans);
}
function sumfaluty(num1, num2) {
    let ans;
    ans = num1 - num2;
    console.log("sum is " + ans);
}
function multiplay(num1, num2) {
    let ans;
    ans = num1 * num2;
    console.log("sum is " + ans);
}
function mutiplayfaluty(num1, num2) {
    let ans;
    ans = num1 + num2;
    console.log("sum is " + ans);
}
function sub(num1, num2) {
    let ans;
    ans = num1 - num2;
    console.log("sum is " + ans);
}
function subfaluty(num1, num2) {
    let ans;
    ans = num1 / num2;
    console.log("sum is " + ans);
}
function division(num1, num2) {
    let ans;
    ans = num1 / num2;
    console.log("sum is " + ans);
}
function divisionfaluty(num1, num2) {
    let ans;
    ans = num1 ** num2;
    console.log("sum is " + ans);
}
do {
    console.log("1.adding");
    console.log("2.multiply");
    console.log("3.sub");
    console.log("4.div");
    console.log("5.exit");
    let number1 = prompt("Enter a number 1");
    let number2 = prompt("Enter a number 2");
    let opreation = prompt("enter an opreation");
    let ram = Math.random();
    switch (opreation) {
        case 1:
            if (ram > 0.1) {
                sum(number1, number2);
            }
            else {
                sumfaluty(number1, number2);
            }
            break;
        case 2:
            if (ram > 0.1) {
                multiplay(number1, number2);
            }
            else {
                mutiplayfaluty(number1, number2);
            }
            break;
        case 3:
            if (ram > 0.1) {
                sub(number1, number2);
            }
            else {
                subfaluty(number1, number2);
            }
            break;
        case 4:
            if (ram > 0.1) {
                division(number1, number2);
            }
            else {
                divisionfaluty(number1, number2);
            }
            break;
        case 5:
            console.log("exit");
        default:
            console.log("enter valid number");
            break;
    }
} while (opreation != 5)
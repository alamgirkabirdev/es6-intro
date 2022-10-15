const add=(num1,num2)=> num1 + num2;
const sum =add(14,12);

const multiply =(num1, num2, num3) =>num1 *num2 *num3;
const result = multiply(10, 14, 20);

const fiveTimes = (num)=> num * 5;
const sum2 = fiveTimes(10);

const getName = () => 'Bradon Sam';
const name =getName();

console.log(name);

const doMath = (x, y) => {
    const sum = x +y;
    const diff =x -y;
    const result = sum * diff;
    const outPot = result * 5;
    return outPot;
}

const value = doMath(12, 5);
console.log(value);

document.getElementById('my-bit').addEventListener(event=>{
    
})
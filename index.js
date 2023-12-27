class Operator{//class was used as it is more semantic
    constructor(symbol, operation, type){
        this.symbol = symbol;
        this.operation = operation;
        this.type = type;
    }
}
const Operations = [
    new Operator("+", (a,b)=>Number(a)+Number(b), "binary"),
    new Operator("-", (a,b)=>Number(a)-Number(b), "binary"),
    new Operator("x", (a,b)=>Number(a)*Number(b), "binary"),
    new Operator("/", (a,b)=>(Math.round(100000*(Number(a)/Number(b))))/100000, "binary"),
];
//console.table(Operations);
let a=undefined, b=undefined, operator=undefined;
let divideByZero = false;
function operate(op,x,y){
    return Operations.find(operation=>operation.symbol===op).operation(x,y);
}
const numbers = document.querySelectorAll(".digit");
const operations = document.querySelectorAll(".operations");
numbers.forEach(number=>number.addEventListener('click', (e)=>{
    const screen = document.querySelector(".display-screen");
    if (divideByZero===false){
        if (a===undefined){
            a=Number(number.textContent);
            screen.textContent+=a;
        }
        else {
            b=Number(number.textContent);
            screen.textContent+=b;        
        }
    }
}));
operations.forEach(op=>op.addEventListener("click", (e)=>{
    const screen = document.querySelector(".display-screen");
    const outputscreen = document.querySelector(".result-screen");
    if (b!==undefined){
        a=operate(operator, a, b);
        b=undefined;
        outputscreen.textContent=a;
    }
    if (b===0 && operator==="/"){
        outputscreen.textContent="Division by zero error";
        divideByZero=true;
        a=undefined;
        b=undefined;
    }
    operator = e.target.textContent;
    if (a!==undefined)screen.textContent += operator;
}))
document.querySelector("#solve").addEventListener("click", (e)=>{
    const outputscreen = document.querySelector(".result-screen");
    if (a!=undefined && b!=undefined){
        a=operate(operator, a, b);
        //clrscr();
        outputscreen.textContent=a;
        if (b===0 && operator==="/"){
            outputscreen.textContent="Divide by zero error";
            divideByZero=true;
            a=undefined;
        }
        b=undefined;
    }
})
function clrscr(){
    divideByZero=false;
    const screen = document.querySelector(".display-screen");
    screen.textContent = "";
    a=undefined;
    b=undefined;
    operator=undefined;
    const outputscreen = document.querySelector(".result-screen");
    outputscreen.textContent = "";
}
document.querySelector("#clrscr").addEventListener("click", clrscr);

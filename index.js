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
    new Operator("*", (a,b)=>Number(a)*Number(b), "binary"),
    new Operator("/", (a,b)=>Number(a)/Number(b), "binary"),
    new Operator("-", (a)=>-1 * Number(a), "unary"),
];
console.table(Operations);
let a, b, operator;
function operate(op,x,y){
    return Operations.filter(op=>op.symbol===op).operation(a,b);
}
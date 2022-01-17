
 // Homework-11
 let code = "0123456789abcdef";
 let number = 56;
 checkCode(code);
function checkCode(code){
    for(i = 0; i < code.length; i++){
        for(j = i + 1; j < code.length; j++){
        if(`${code[i]}` == `${code[j]}`){
            console.log("Error!");
            return;
            }
        }
    }
    console.log(encode(number,code));
}
function encode (num, codingString){
    let res = "";
    do{
        const digit = Math.trunc(num % codingString.length);
        const symb = getSymbol(digit);
        res = symb + res;
          num = Math.trunc(num / codingString.length);
    }while(num >= 1);
    return res;
}
function getSymbol(digit){
    return "" +`${code[digit]}`;
}

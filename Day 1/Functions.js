function factorial(n){
    if(n == 1 || n == 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
//test cases
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(10));
console.log(factorial(15));
console.log(factorial(20));

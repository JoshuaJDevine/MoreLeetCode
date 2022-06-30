//1 -Clarify the problem and test I/O cases

//2 -Formulate your approach

//3 -Pseudocode best approach

//4 -Code it

//5 -Walk through an example input

//6- Determine the Big O time and space complexity

//1
//Find the nth prime number
//For this problem we can assume that valid input is a positive integer > 1. We will do a simple error check.

//2
//We will write a helper function isPrime to return true or false if a number is prime or not.
//A prime number is divisible by itself and 1. 0 and 1 are not considered prime.

//3
/*
function isPrime(num){
    ...
}

function nthPrime(nthNum){
    counter to track how many we have found
    answer to track our current prime number
    loop i++ whilecounter != nthNum
        Don't forget to increase the counter!
        check if i is prime
        if so, store answer
        break loop when counter => nthNum
}
 */

//4
const memo = {};

function isPrime(n){
    if (typeof n != 'number' || n < 1) return "Please provide input that is a positive integer > 1"

    if (n in memo) return memo[n]

    for (let i = 2; i < n; i++){
        if (n % i === 0) {
            memo[n] = false;
            return false
        }
    }

    memo[n] = true;
    return true;
}

function nthPrime(nthNum){
    if (typeof nthNum != 'number' || nthNum < 1) return "Please provide a positive integer > 0"

    let counter = 0;
    let answer = 0;
    let i = 2;
    while (counter !== nthNum){
        if (isPrime(i)){
            counter ++;
            answer = i;
        }
        i++;
    }

    return answer;
}

console.log(nthPrime(50000))

//5

//6

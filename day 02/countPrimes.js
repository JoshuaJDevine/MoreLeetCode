//1 -Clarify the problem and test I/O cases

//2 -Formulate your approach

//3 -Pseudocode best approach

//4 -Code it

//5 -Walk through an example input

//6- Determine the Big O time and space complexity

//1
//Given an integer n, return the number of prime numbers that are strictly less than n.
//Reject all input that is not an integer greater than 2

//2
//Use a helper method isPrime to check if a number is Prime
//Use a function countPrimes(n) to use a while loop and counters to find all the primes until we have reached n-1

//3
/*
function isPrime(num){
    ...
}

function countPrimes(n){
    currentPrime;
    totalNumberOfPrimes;
    iterator;

    while loop (if currentPrime < n)
        continue
        set new prime
        increase iterator
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

function countPrimes(num){
    if (typeof num != 'number' || num < 2) return "Please provide input that is a positive integer > 2"
    if (num === 2) return 0;

    let currentPrime = 0;
    let totalPrimes = 0;
    let i = 2;

    while (currentPrime < num){
        if (isPrime(i)){
            currentPrime = i;
            totalPrimes ++;
        }
        i++;
    }

    return totalPrimes-1;
}

console.log(countPrimes(500000))

// input = 10
// primes = 2,3,5,7,11
/*
2 - currentPrime = 2
    totalPrime = 1
    i=3

3 - currentPrime = 3
    totalPrime = 2
    i=4

4 - currentPrime = 3
    totalPrime = 2
    i=5

5 - currentPrime = 5
    totalPrime = 3
    i=6

6 - currentPrime = 5
    totalPrime = 3
    i=7

7 - currentPrime = 7
    totalPrime = 4
    i=8

8 - currentPrime = 7
    totalPrime = 4
    i=9

9 - currentPrime = 7
    totalPrime = 4
    i=9
 */


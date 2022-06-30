//Split the string into an array
//Move through the array in O(n) time and use a switch statement to do the conversion

let romanToInt = function(s) {
    let total = 0;
    for (let i=0; i < s.length; i++){
        switch (s[i]){
            case "I":
                total += 1;
                break;
            case "V":
                if (i-1 >= 0 && s[i-1] === "I") total += 3;
                else total += 5;
                break;
            case "X":
                if (i-1 >= 0 && s[i-1] === "I") total += 8;
                else total += 10;
                break;
            case "L":
                if (i-1 >= 0 && s[i-1] === "X") total += 30;
                else total += 50;
                break;
            case "C":
                if (i-1 >= 0 && s[i-1] === "X") total += 80;
                else total += 100;
                break;
            case "D":
                if (i-1 >= 0 && s[i-1] === "C") total += 300;
                else total += 500;
                break;
            case "M":
                if (i-1 >= 0 && s[i-1] === "C") total += 800;
                else total += 1000;
                break;
        }
    }
    return total;
};


console.log(romanToInt("MCMXCIV"));

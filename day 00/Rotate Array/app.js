// 1 clarify the io and observe the problem
// 2 formulate approach
// 3 psuedocode
// 4 code
// 5 example IO
// 6 big O

/*
1 ----
Leetcude Broh

2 ----
k = k % nums.len to get the remainder if given a large K
store the last k digits
store the first k-len digits
combine the arrays (concat)

3 ----
function doThing(){
    k = k % nums.len

    temp1 = slice
    temp2 = -slice

    return concat
}
 */

function rotate(nums, k){
    k = (k % nums.length)
    let temp1 = null;
    console.log(k)
    if (k % 2 == 0){
        temp1 = nums.slice(0,nums.length-k)
    }
    else temp1 = nums.slice(0,nums.length-k+1);

    let temp2 = nums.slice(-k);
    let newArr = temp2.concat(temp1);

    for (let i = 0; i < nums.length; i++) {
        nums[i] = newArr[i];
    }
}
nums = [1,2,3,4,5,6,7], k = 3
rotate(nums, k);


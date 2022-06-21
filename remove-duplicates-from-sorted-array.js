//1 -Clarify the problem and test I/O cases

//2 -Formulate your approach

//3 -Psuedocode best approach

//4 -Code it

//5 -Walk through example input

//6 -Determine big O time and space complexity

//1
//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
//The relative order of the elements should be kept the same.
//1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

//2
//Using a pointer approach we can navigate the array once.
//Since the array is sorted, once we have a unique number we can move the pointer to the next unique number

//3
/*
// function removeDuplicates(nums){
    let pointer = 0;
    loop through the nums
        if (num[i] != pointer)
            num[pointer+1] = num[i]
            pointer = i
}
 */

//4
function removeDuplicates(nums){
    let pointer = 0;
    let k = 1;
    for (let i=0; i<nums.length; i++){
        if (nums[i] != nums[pointer]){
            nums[pointer+1] = nums[i];
            pointer++;
            k++;
        }
    }
    return k;
}

//5
/*
[1,1,2)
    i = 0
    pointer = 0
    k = 1

[1,1,2)
    i = 1
    pointer = 0
    k = 1

[1,2,2)
    i = 2
    pointer = 1
    k = 2
 */

//6
//Complexity is space = constant 0(1)
//Complexity is time = linear O(n)

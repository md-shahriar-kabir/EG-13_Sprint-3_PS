
// 01. Contains Duplicate
// Write a validation function that determines whether an array contains any duplicate values. Return true if any value appears more than once, otherwise return false.

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
var containsDuplicate = function(nums) {
    const seen = new Set();
    
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    
    return false;
};

// --------------------------------------------------------------------
// --------------------------------------------------------------------


// 02. Move Zeroes
// Write a transformation function that moves all zero values to the end of an array while maintaining the relative order of the non-zero elements.

// /**
// * @param {number[]} nums
// * @return {void} Do not return anything, modify nums in-place instead.
//  */

var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt] = nums[i];
            lastNonZeroFoundAt++;
        }
    }

    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
};

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
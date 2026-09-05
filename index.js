
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

// --------------------------------------------------------------------
// --------------------------------------------------------------------


// 03. Valid Anagram
// Write a validation function that determines whether two strings are anagrams of each other.


// /**
// * @param {string} s
// * @param {string} t
// * @return {boolean}
//  */


var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    return true;
};

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// 04. Ransom Note
// Write a validation function that determines whether a ransom note can be constructed using characters from a given magazine string. Each character can only be used once.

// /**
// * @param {string} ransomNote
// * @param {string} magazine
// * @return {boolean}
// */

var canConstruct = function(ransomNote, magazine) {
    const charCounts = {};

    for (const char of magazine) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    for (const char of ransomNote) {
        if (!charCounts[char] || charCounts[char] === 0) {
            return false;
        }
        charCounts[char]--;
    }

    return true;
};
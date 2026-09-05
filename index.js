
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


// --------------------------------------------------------------------
// --------------------------------------------------------------------

// 05. Majority Element
// Write a function that identifies the element that appears more than n / 2 times in an array.

// /**
// * @param {number[]} nums
// * @return {number}
// */

var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// 06. 3Sum
// Write a function that finds all unique triplets in an array whose three values add up to zero. The solution must not contain duplicate triplets.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

var threeSum = function(nums) {
    const result = [];
    
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--; 
            }
        }
    }

    return result;
};


// --------------------------------------------------------------------
// --------------------------------------------------------------------

// 07. Subarray Sum Equals K
// Write a function that counts the total number of continuous subarrays whose elements add up exactly to a given integer k.

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */

var subarraySum = function(nums, k) {
    let count = 0;
    let currentSum = 0;
    
    const prefixSumMap = new Map();
    
    prefixSumMap.set(0, 1);

    for (let num of nums) {
        currentSum += num;

        if (prefixSumMap.has(currentSum - k)) {
            count += prefixSumMap.get(currentSum - k);
        }

        prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);
    }

    return count;
};


// --------------------------------------------------------------------
// --------------------------------------------------------------------

// 08. Top K Frequent Elements
// Write a function that returns the k most frequent elements from an integer array.

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */

var topKFrequent = function(nums, k) {
    const map = new Map();
    const buckets = Array.from({ length: nums.length + 1 }, () => []);

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, freq] of map.entries()) {
        buckets[freq].push(num);
    }

    const result = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
    }

    return result.slice(0, k);
};

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// 09. Longest Consecutive Sequence
// Write a function that finds the length of the longest sequence of consecutive integers in an unsorted array. The solution should aim for linear time complexity.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {

        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// 10. Sort Colors
// Write an in-place sorting function that sorts an array containing only 0, 1, and 2 so that the same colors are grouped together in ascending order.

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */

    var sortColors = function(nums) {
        let low = 0;
        let mid = 0;
        let high = nums.length - 1;

        while (mid <= high) {
            if (nums[mid] === 0) {

                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                low++;
                mid++;
            } else if (nums[mid] === 1) {

                mid++;
            } else {

                [nums[mid], nums[high]] = [nums[high], nums[mid]];
                high--;
            }
        }
    };


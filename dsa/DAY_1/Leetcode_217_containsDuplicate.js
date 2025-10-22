// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3
const arr = [1, 2, 3, 1];

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const seen = {};           // value -> true (or index)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in seen) { // if we've seen this value before -> duplicate
            return true;
        }
        seen[nums[i]] = true;  // mark as seen
    }
    return false;
};

console.log(containsDuplicate(arr)); // true

// alternate method simple use
// new Set() and check length because you know set removes the duplicate
// var containsDuplicate = function (nums) {
//     return new Set(nums).size !== nums.length;
// };
// it is not preferred because creating a new set takes more time i.e O(n) in case of a smaller array as well
// but in hashmap we return as soon as we find a duplicate O(1) in a smaller array case
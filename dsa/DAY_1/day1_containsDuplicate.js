const { use } = require("react");

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
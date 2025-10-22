// pattern : count frequency, commonly used in character counting 
const countFreq = (arr) => {
    const freqMap = {};
    for (let item of arr) {
        freqMap[item] = (freqMap[item] || 0) + 1
    }
    console.log(freqMap);
    return freqMap;
}

console.log(countFreq(['apple', 'ball', 'ball', 'cat', 'apple'])) // { '1': 1, '2': 2, '3': 1, '4': 3 }


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// for the 2 SUM problem now
//refer notes
// https://www.youtube.com/watch?v=KLlXCFG5TnA
var twoSum = function (nums, target) {
    const numsMap = {};

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];

        if (compliment in numsMap) {    // numsMap.hasOwnProperty(compliment) works too
            return [numsMap[compliment], i]
        }

        numsMap[nums[i]] = i;
    }

    return [];
};

// Test the function
console.log(twoSum([2, 7, 11, 15], 9));     // [0, 1]
console.log(twoSum([3, 2, 4], 6));          // [1, 2]
console.log(twoSum([3, 3], 6));             // [0, 1]
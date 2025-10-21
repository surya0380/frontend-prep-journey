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



// for the 2 SUM problem now
//refer notes
// https://www.youtube.com/watch?v=KLlXCFG5TnA
var twoSum = function (nums, target) {
    const numsMap = {};

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];

        if (compliment in numsMap) {
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